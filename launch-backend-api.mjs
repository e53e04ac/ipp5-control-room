/*!
    @e53e04ac/ipp5-control-room/launch-backend-api.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { randomUUID as cryptoRandomUUID } from 'node:crypto';

import { Argv } from 'argv';
import { DateTime } from 'date-time';
import { FileEntry } from 'file-entry-native';
import { hold } from 'hold';
import { Ipp5BackendApiBuilder } from 'ipp5-backend-api-builder';
import { Ipp5BackendApiLauncher } from 'ipp5-backend-api-launcher';
import { Ipp5Configuration } from 'ipp5-configuration';

/** @type {import('.').LaunchBackendApiApplication} */
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
        return Ipp5BackendApiBuilder({
            docker: app.configuration().docker,
            appDirectory: app.configuration().directories.backendApiDirectory,
            tmpDirectory: app.configuration().directories.tmpDirectory,
            buildId: app.params.runId(),
            noCache: app.params.noCache(),
            containerAppGroup: app.configuration().backendApi.containerAppGroup,
            containerAppUser: app.configuration().backendApi.containerAppUser,
            containerAppEntrypoint: app.configuration().backendApi.containerAppEntrypoint,
            containerAppPort: app.configuration().backendApi.containerAppPort,
            containerImageName: app.configuration().backendApi.containerImageName,
            containerAppDirectoryPath: app.configuration().backendApi.containerAppDirectoryPath,
        });
    }),
    launcher: hold(() => {
        return Ipp5BackendApiLauncher({
            az: app.configuration().az,
            docker: app.configuration().docker,
            tmpDirectory: app.configuration().directories.tmpDirectory,
            launchId: app.params.runId(),
            containerImageName: app.configuration().backendApi.containerImageName,
            containerTimezoneId: app.configuration().backendApi.containerTimezoneId,
            containerAppPort: app.configuration().backendApi.containerAppPort,
            acrSubscription: app.configuration().defaultAcr.subscription,
            acrName: app.configuration().defaultAcr.name,
            webappSubscription: app.configuration().backendApiWebapp.subscription,
            webappResourceGroup: app.configuration().backendApiWebapp.resourceGroup,
            webappName: app.configuration().backendApiWebapp.name,
            webappDeploymentContainerImageName: app.configuration().backendApiWebapp.deploymentContainerImageName,
            backendApiUrn: app.configuration().urns.backendApiUrn,
            backendApiHttpPathPrefix: app.configuration().backendApi.httpPathPrefix,
            containerBackendMountPath: app.configuration().backendApi.containerBackendMountPath,
            backendIdpTokenUrn: app.configuration().urns.backendIdpTokenUrn,
            backendIdpTokenPublicKey: app.configuration().publicKeys.backendIdpTokenPublicKey,
        });
    }),
    run: hold(async () => {
        app.runId();
        await app.builder().build();
        await app.launcher().launch();
    }),
});

await app.run();
