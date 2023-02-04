/*!
    @e53e04ac/ipp5-control-room/terraform.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { randomUUID as cryptoRandomUUID } from 'node:crypto';

import { Argv } from 'argv';
import { DateTime } from 'date-time';
import { FileEntry } from 'file-entry-native';
import { hold } from 'hold';
import { Ipp5Configuration } from 'ipp5-configuration';
import { Ipp5Terraformer } from 'ipp5-terraformer';

/** @type {import('.').TerraformApplication} */
const app = ({
    scriptFile: hold(() => {
        return FileEntry(new URL(import.meta.url).pathname);
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
    terraformer: hold(() => {
        return Ipp5Terraformer({
            configuration: app.configuration(),
        });
    }),
    run: hold(async () => {
        await app.terraformer().terraform();
    }),
});

await app.run();
