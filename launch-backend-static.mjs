/*!
    @e53e04ac/ipp5-control-room/launch-backend-static.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { randomUUID as cryptoRandomUUID } from 'node:crypto';

import { Argv } from 'argv';
import { DateTime } from 'date-time';
import { FileEntry } from 'file-entry-native';
import { hold } from 'hold';
import { Ipp5BackendStaticBuilder } from 'ipp5-backend-static-builder';
import { Ipp5BackendStaticLauncher } from 'ipp5-backend-static-launcher';
import { Ipp5Configuration } from 'ipp5-configuration';

/** @type {import('.').LaunchBackendStaticApplication} */
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
        return Ipp5BackendStaticBuilder({
            docker: app.configuration().docker,
            appDirectory: app.configuration().directories.backendStaticDirectory,
            staticDistDirectory: app.configuration().directories.staticDistDirectory,
            tmpDirectory: app.configuration().directories.tmpDirectory.resolve('ipp5-backend-static-builder'),
            buildId: app.params.runId(),
            noCache: app.params.noCache(),
            containerAppGroup: app.configuration().backendStatic.containerAppGroup,
            containerAppUser: app.configuration().backendStatic.containerAppUser,
            containerAppEntrypoint: app.configuration().backendStatic.containerAppEntrypoint,
            containerAppPort: app.configuration().backendStatic.containerAppPort,
            containerImageName: app.configuration().backendStatic.containerImageName,
            containerAppDirectoryPath: app.configuration().backendStatic.containerAppDirectoryPath,
            containerDocumentRootDirectoryPath: app.configuration().backendStatic.containerDocumentRootDirectoryPath,
        });
    }),
    launcher: hold(() => {
        return Ipp5BackendStaticLauncher({
            az: app.configuration().az,
            docker: app.configuration().docker,
            tmpDirectory: app.configuration().directories.tmpDirectory.resolve('ipp5-backend-static-launcher'),
            launchId: app.params.runId(),
            containerImageName: app.configuration().backendStatic.containerImageName,
            containerTimezoneId: app.configuration().backendStatic.containerTimezoneId,
            containerAppPort: app.configuration().backendStatic.containerAppPort,
            acrSubscription: app.configuration().defaultAcr.subscription,
            acrName: app.configuration().defaultAcr.name,
            webappSubscription: app.configuration().backendStaticWebapp.subscription,
            webappResourceGroup: app.configuration().backendStaticWebapp.resourceGroup,
            webappName: app.configuration().backendStaticWebapp.name,
            webappDeploymentContainerImageName: app.configuration().backendStaticWebapp.deploymentContainerImageName,
            backendStaticHttpPathPrefix: app.configuration().backendStatic.httpPathPrefix,
            containerDocumentRootDirectoryPath: app.configuration().backendStatic.containerDocumentRootDirectoryPath,
        });
    }),
    run: hold(async () => {
        app.runId();
        await app.builder().build();
        await app.launcher().launch();
    }),
});

await app.run();
