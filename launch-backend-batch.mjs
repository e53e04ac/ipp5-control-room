/*!
    @e53e04ac/ipp5-control-room/launch-backend-batch.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { randomUUID as cryptoRandomUUID } from 'node:crypto';

import { Argv } from 'argv';
import { DateTime } from 'date-time';
import { FileEntry } from 'file-entry-native';
import { hold } from 'hold';
import { Ipp5BackendBatchBuilder } from 'ipp5-backend-batch-builder';
import { Ipp5BackendBatchLauncher } from 'ipp5-backend-batch-launcher';
import { Ipp5Configuration } from 'ipp5-configuration';

/** @type {import('.').LaunchBackendBatchApplication} */
const app = ({
    scriptFile: hold(() => {
        return FileEntry.fromFileUrl(import.meta.url);
    }),
    scriptDirectory: hold(() => {
        return app.scriptFile().parent();
    }),
    runDate: hold(() => {
        return DateTime.now();
    }),
    runUuid: hold(() => {
        return cryptoRandomUUID({ disableEntropyCache: true });
    }),
    runId: hold(() => {
        return `${app.runDate().YYYYMMDDhhmmssnnn()}_${app.runUuid().replace(/[^0-9a-f]/g, '')}`;
    }),
    process: hold(() => {
        return process;
    }),
    argv: hold(() => {
        return Argv({ argv: app.process().argv });
    }),
    configuration: hold(() => {
        return Ipp5Configuration.from(app.argv().stringValue('--configuration') ?? '.configuration');
    }),
    params: {
        noCache: hold(() => {
            return app.argv().includes('--no-cache');
        }),
        runId: hold(() => {
            return app.argv().stringValue('--run-id') ?? app.runId();
        }),
    },
    builder: hold(() => {
        return Ipp5BackendBatchBuilder({
            docker: app.configuration().docker,
            appDirectory: app.configuration().directories.backendBatchDirectory,
            tmpDirectory: app.configuration().directories.tmpDirectory,
            buildId: app.params.runId(),
            noCache: app.params.noCache(),
            containerAppGroup: app.configuration().backendBatch.containerAppGroup,
            containerAppUser: app.configuration().backendBatch.containerAppUser,
            containerAppEntrypoint: app.configuration().backendBatch.containerAppEntrypoint,
            containerAppPort: app.configuration().backendBatch.containerAppPort,
            containerImageName: app.configuration().backendBatch.containerImageName,
            containerAppDirectoryPath: app.configuration().backendBatch.containerAppDirectoryPath,
        });
    }),
    launcher: hold(() => {
        return Ipp5BackendBatchLauncher({
            az: app.configuration().az,
            docker: app.configuration().docker,
            tmpDirectory: app.configuration().directories.tmpDirectory,
            launchId: app.params.runId(),
            containerImageName: app.configuration().backendBatch.containerImageName,
            containerTimezoneId: app.configuration().backendBatch.containerTimezoneId,
            containerAppPort: app.configuration().backendBatch.containerAppPort,
            acrSubscription: app.configuration().defaultAcr.subscription,
            acrName: app.configuration().defaultAcr.name,
            webappSubscription: app.configuration().backendBatchWebapp.subscription,
            webappResourceGroup: app.configuration().backendBatchWebapp.resourceGroup,
            webappName: app.configuration().backendBatchWebapp.name,
            webappDeploymentContainerImageName: app.configuration().backendBatchWebapp.deploymentContainerImageName,
            backendBatchUrn: app.configuration().urns.backendBatchUrn,
            backendBatchHttpPathPrefix: app.configuration().backendBatch.httpPathPrefix,
            containerBackendMountPath: app.configuration().backendBatch.containerBackendMountPath,
            containerBackendBatchMountPath: app.configuration().backendBatch.containerBackendBatchMountPath,
            backendBatchVaultName: app.configuration().backendBatch.vaultName,
            backendBatchAdlibitumClientUrn: app.configuration().urns.backendBatchAdlibitumClientUrn,
            backendBatchAdlibitumServerUrn: app.configuration().urns.backendBatchAdlibitumServerUrn,
            backendBatchAdlibitumClientPublicKey: app.configuration().publicKeys.backendBatchAdlibitumClientPublicKey,
        });
    }),
    run: hold(async () => {
        app.runId();
        await app.builder().build();
        await app.launcher().launch();
    }),
});

await app.run();
