/*!
    @e53e04ac/ipp5-control-room/launch-backend-idp.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { randomUUID as cryptoRandomUUID } from 'node:crypto';

import { Argv } from 'argv';
import { DateTime } from 'date-time';
import { FileEntry } from 'file-entry-native';
import { hold } from 'hold';
import { Ipp5BackendIdpBuilder } from 'ipp5-backend-idp-builder';
import { Ipp5BackendIdpLauncher } from 'ipp5-backend-idp-launcher';
import { Ipp5Configuration } from 'ipp5-configuration';

/** @type {import('.').LaunchBackendIdpApplication} */
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
        return Ipp5BackendIdpBuilder({
            docker: app.configuration().docker,
            appDirectory: app.configuration().directories.backendIdpDirectory,
            tmpDirectory: app.configuration().directories.tmpDirectory.resolve('ipp5-backend-idp-builder'),
            buildId: app.params.runId(),
            noCache: app.params.noCache(),
            containerAppGroup: app.configuration().backendIdp.containerAppGroup,
            containerAppUser: app.configuration().backendIdp.containerAppUser,
            containerAppEntrypoint: app.configuration().backendIdp.containerAppEntrypoint,
            containerAppPort: app.configuration().backendIdp.containerAppPort,
            containerImageName: app.configuration().backendIdp.containerImageName,
            containerAppDirectoryPath: app.configuration().backendIdp.containerAppDirectoryPath,
        });
    }),
    launcher: hold(() => {
        return Ipp5BackendIdpLauncher({
            az: app.configuration().az,
            docker: app.configuration().docker,
            tmpDirectory: app.configuration().directories.tmpDirectory.resolve('ipp5-backend-idp-launcher'),
            launchId: app.params.runId(),
            containerImageName: app.configuration().backendIdp.containerImageName,
            containerTimezoneId: app.configuration().backendIdp.containerTimezoneId,
            containerAppPort: app.configuration().backendIdp.containerAppPort,
            acrSubscription: app.configuration().defaultAcr.subscription,
            acrName: app.configuration().defaultAcr.name,
            webappSubscription: app.configuration().backendIdpWebapp.subscription,
            webappResourceGroup: app.configuration().backendIdpWebapp.resourceGroup,
            webappName: app.configuration().backendIdpWebapp.name,
            webappDeploymentContainerImageName: app.configuration().backendIdpWebapp.deploymentContainerImageName,
            backendIdpHttpPathPrefix: app.configuration().backendIdp.httpPathPrefix,
            backendIdpRegisterUrn: app.configuration().urns.backendIdpRegisterUrn,
            backendIdpRegisterPrivateKey: app.configuration().privateKeys.backendIdpRegisterPrivateKey,
            backendIdpRegisterPublicKey: app.configuration().publicKeys.backendIdpRegisterPublicKey,
            backendIdpChallengeTokenUrn: app.configuration().urns.backendIdpChallengeTokenUrn,
            backendIdpChallengeTokenPrivateKey: app.configuration().privateKeys.backendIdpChallengeTokenPrivateKey,
            backendIdpChallengeTokenPublicKey: app.configuration().publicKeys.backendIdpChallengeTokenPublicKey,
            backendIdpTokenUrn: app.configuration().urns.backendIdpTokenUrn,
            backendIdpTokenPrivateKey: app.configuration().privateKeys.backendIdpTokenPrivateKey,
            backendIdpStorageAccountName: app.configuration().backendIdp.storageAccountName,
            backendApiUrn: app.configuration().urns.backendApiUrn,
        });
    }),
    run: hold(async () => {
        app.runId();
        await app.builder().build();
        await app.launcher().launch();
    }),
});

await app.run();
