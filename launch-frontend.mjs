/*!
    @e53e04ac/ipp5-control-room/launch-frontend.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { randomUUID as cryptoRandomUUID } from 'node:crypto';

import { Argv } from 'argv';
import { DateTime } from 'date-time';
import { FileEntry } from 'file-entry-native';
import { hold } from 'hold';
import { Ipp5Configuration } from 'ipp5-configuration';
import { Ipp5FrontendBuilder } from 'ipp5-frontend-builder';
import { Ipp5FrontendLauncher } from 'ipp5-frontend-launcher';

/** @type {import('.').LaunchFrontendApplication} */
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
        return Ipp5FrontendBuilder({
            docker: app.configuration().docker,
            tmpDirectory: app.configuration().directories.tmpDirectory,
            buildId: app.params.runId(),
            noCache: app.params.noCache(),
            containerAppGroup: app.configuration().frontend.containerAppGroup,
            containerAppUser: app.configuration().frontend.containerAppUser,
            containerAppEntrypoint: app.configuration().frontend.containerAppEntrypoint,
            containerAppPort: app.configuration().frontend.containerAppPort,
            containerImageName: app.configuration().frontend.containerImageName,
            backendApiHttpPathPrefix: app.configuration().backendApi.httpPathPrefix,
            backendApiUrl: app.configuration().backendApi.url,
            backendBatchHttpPathPrefix: app.configuration().backendBatch.httpPathPrefix,
            backendBatchUrl: app.configuration().backendBatch.url,
            backendIdpHttpPathPrefix: app.configuration().backendIdp.httpPathPrefix,
            backendIdpUrl: app.configuration().backendIdp.url,
            backendStaticHttpPathPrefix: app.configuration().backendStatic.httpPathPrefix,
            backendStaticUrl: app.configuration().backendStatic.url,
        });
    }),
    launcher: hold(() => {
        return Ipp5FrontendLauncher({
            az: app.configuration().az,
            docker: app.configuration().docker,
            tmpDirectory: app.configuration().directories.tmpDirectory,
            launchId: app.params.runId(),
            containerImageName: app.configuration().frontend.containerImageName,
            containerTimezoneId: app.configuration().frontend.containerTimezoneId,
            containerAppPort: app.configuration().frontend.containerAppPort,
            acrSubscription: app.configuration().defaultAcr.subscription,
            acrName: app.configuration().defaultAcr.name,
            webappSubscription: app.configuration().frontendWebapp.subscription,
            webappResourceGroup: app.configuration().frontendWebapp.resourceGroup,
            webappName: app.configuration().frontendWebapp.name,
            webappDeploymentContainerImageName: app.configuration().frontendWebapp.deploymentContainerImageName,
        });
    }),
    run: hold(async () => {
        app.runId();
        await app.builder().build();
        await app.launcher().launch();
    }),
});

await app.run();
