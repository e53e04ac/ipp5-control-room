/*!
    @e53e04ac/ipp5-control-room/build-static.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { randomUUID as cryptoRandomUUID } from 'node:crypto';

import { Argv } from 'argv';
import { DateTime } from 'date-time';
import { FileEntry } from 'file-entry-native';
import { hold } from 'hold';
import { Ipp5Configuration } from 'ipp5-configuration';
import { Ipp5StaticBuilder } from 'ipp5-static-builder';

/** @type {import('.').BuildStaticApplication} */
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
        runId: hold(() => {
            return app.argv().stringValue('--run-id') ?? app.runId();
        }),
    },
    builder: hold(() => {
        return Ipp5StaticBuilder({
            srcDirectory: app.configuration().directories.staticDirectory,
            tmpDirectory: app.configuration().directories.tmpDirectory.resolve('ipp5-static-builder'),
            buildId: app.params.runId(),
            distDirectory: app.configuration().directories.staticDistDirectory,
        });
    }),
    run: hold(async () => {
        app.runId();
        await app.builder().build();
    }),
});

await app.run();
