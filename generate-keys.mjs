/*!
    @e53e04ac/ipp5-control-room/generate-keys.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { randomUUID as cryptoRandomUUID } from 'node:crypto';
import { webcrypto } from 'node:crypto';

import { Argv } from 'argv';
import { DateTime } from 'date-time';
import { FileEntry } from 'file-entry-native';
import { hold } from 'hold';

/** @type {import('.').GenerateKeysApplication} */
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
    configurationDirectory: hold(() => {
        return FileEntry(app.argv().stringValue('--configuration') ?? '.configuration');
    }),
    pemFromArrayBuffer: (({ type, arrayBuffer }) => {
        return [
            `-----BEGIN ${type}-----`,
            ...Buffer.from(arrayBuffer).toString('base64').split(/(.{64})/).filter((line) => line.length >= 1),
            `-----END ${type}-----`
        ].join('\n');
    }),
    generateKeyECDSA: (async (namedCurve) => {
        const cryptoKeyPair = await webcrypto.subtle.generateKey({ name: 'ECDSA', namedCurve }, true, ['sign', 'verify']);
        const privateKeyArrayBuffer = await webcrypto.subtle.exportKey('pkcs8', cryptoKeyPair.privateKey);
        const publicKeyArrayBuffer = await webcrypto.subtle.exportKey('spki', cryptoKeyPair.publicKey);
        const privateKey = app.pemFromArrayBuffer({ type: 'EC PRIVATE KEY', arrayBuffer: privateKeyArrayBuffer });
        const publicKey = app.pemFromArrayBuffer({ type: 'PUBLIC KEY', arrayBuffer: publicKeyArrayBuffer });
        return { privateKey, publicKey };
    }),
    run: hold(async () => {
        await app.generateKeyECDSA('P-521').then(async ({ privateKey, publicKey }) => {
            await app.configurationDirectory().resolve('.backend-batch-adlibitum-client-private-key.pem').writeString(privateKey);
            await app.configurationDirectory().resolve('.backend-batch-adlibitum-client-public-key.pem').writeString(publicKey);
        });
        await app.generateKeyECDSA('P-521').then(async ({ privateKey, publicKey }) => {
            await app.configurationDirectory().resolve('.backend-idp-challenge-token-private-key.pem').writeString(privateKey);
            await app.configurationDirectory().resolve('.backend-idp-challenge-token-public-key.pem').writeString(publicKey);
        });
        await app.generateKeyECDSA('P-521').then(async ({ privateKey, publicKey }) => {
            await app.configurationDirectory().resolve('.backend-idp-register-private-key.pem').writeString(privateKey);
            await app.configurationDirectory().resolve('.backend-idp-register-public-key.pem').writeString(publicKey);
        });
        await app.generateKeyECDSA('P-384').then(async ({ privateKey, publicKey }) => {
            await app.configurationDirectory().resolve('.backend-idp-token-private-key.pem').writeString(privateKey);
            await app.configurationDirectory().resolve('.backend-idp-token-public-key.pem').writeString(publicKey);
        });
    }),
});

await app.run();
