/*!
    @e53e04ac/ipp5-control-room/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Argv } from 'argv';
import { DateTime } from 'date-time';
import { FileEntry } from 'file-entry';
import { Get } from 'hold';
import { Ipp5BackendApiBuilder } from 'ipp5-backend-api-builder';
import { Ipp5BackendApiLauncher } from 'ipp5-backend-api-launcher';
import { Ipp5BackendBatchBuilder } from 'ipp5-backend-batch-builder';
import { Ipp5BackendBatchLauncher } from 'ipp5-backend-batch-launcher';
import { Ipp5BackendIdpBuilder } from 'ipp5-backend-idp-builder';
import { Ipp5BackendIdpLauncher } from 'ipp5-backend-idp-launcher';
import { Ipp5BackendStaticBuilder } from 'ipp5-backend-static-builder';
import { Ipp5BackendStaticLauncher } from 'ipp5-backend-static-launcher';
import { Ipp5Configuration } from 'ipp5-configuration';
import { Ipp5FrontendBuilder } from 'ipp5-frontend-builder';
import { Ipp5FrontendLauncher } from 'ipp5-frontend-launcher';
import { Ipp5StaticBuilder } from 'ipp5-static-builder';
import { Ipp5Terraformer } from 'ipp5-terraformer';

export declare type BuildStaticApplication = {
    readonly scriptFile: Get<FileEntry>;
    readonly scriptDirectory: Get<FileEntry>;
    readonly runDate: Get<DateTime>;
    readonly runUuid: Get<string>;
    readonly runId: Get<string>;
    readonly process: Get<NodeJS.Process>;
    readonly argv: Get<Argv>;
    readonly configuration: Get<Ipp5Configuration>;
    readonly params: {
        readonly runId: Get<string>;
    };
    readonly builder: Get<Ipp5StaticBuilder>;
    readonly run: Get<Promise<void>>;
};

export declare type GenerateKeysApplication = {
    readonly scriptFile: Get<FileEntry>;
    readonly scriptDirectory: Get<FileEntry>;
    readonly runDate: Get<DateTime>;
    readonly runUuid: Get<string>;
    readonly runId: Get<string>;
    readonly process: Get<NodeJS.Process>;
    readonly argv: Get<Argv>;
    readonly configurationDirectory: Get<FileEntry>;
    readonly pemFromArrayBuffer: {
        (params: {
            readonly type: 'EC PRIVATE KEY' | 'PUBLIC KEY';
            readonly arrayBuffer: ArrayBuffer;
        }): string;
    };
    readonly generateKeyECDSA: {
        (namedCurve: 'P-256' | 'P-384' | 'P-521'): Promise<{
            readonly privateKey: string;
            readonly publicKey: string;
        }>;
    };
    readonly run: Get<Promise<void>>;
};

export declare type LaunchBackendApiApplication = {
    readonly scriptFile: Get<FileEntry>;
    readonly scriptDirectory: Get<FileEntry>;
    readonly runDate: Get<DateTime>;
    readonly runUuid: Get<string>;
    readonly runId: Get<string>;
    readonly process: Get<NodeJS.Process>;
    readonly argv: Get<Argv>;
    readonly configuration: Get<Ipp5Configuration>;
    readonly params: {
        readonly noCache: Get<boolean>;
        readonly runId: Get<string>;
    };
    readonly builder: Get<Ipp5BackendApiBuilder>;
    readonly launcher: Get<Ipp5BackendApiLauncher>;
    readonly run: Get<Promise<void>>;
};

export declare type LaunchBackendBatchApplication = {
    readonly scriptFile: Get<FileEntry>;
    readonly scriptDirectory: Get<FileEntry>;
    readonly runDate: Get<DateTime>;
    readonly runUuid: Get<string>;
    readonly runId: Get<string>;
    readonly process: Get<NodeJS.Process>;
    readonly argv: Get<Argv>;
    readonly configuration: Get<Ipp5Configuration>;
    readonly params: {
        readonly noCache: Get<boolean>;
        readonly runId: Get<string>;
    };
    readonly builder: Get<Ipp5BackendBatchBuilder>;
    readonly launcher: Get<Ipp5BackendBatchLauncher>;
    readonly run: Get<Promise<void>>;
};

export declare type LaunchBackendIdpApplication = {
    readonly scriptFile: Get<FileEntry>;
    readonly scriptDirectory: Get<FileEntry>;
    readonly runDate: Get<DateTime>;
    readonly runUuid: Get<string>;
    readonly runId: Get<string>;
    readonly process: Get<NodeJS.Process>;
    readonly argv: Get<Argv>;
    readonly configuration: Get<Ipp5Configuration>;
    readonly params: {
        readonly noCache: Get<boolean>;
        readonly runId: Get<string>;
    };
    readonly builder: Get<Ipp5BackendIdpBuilder>;
    readonly launcher: Get<Ipp5BackendIdpLauncher>;
    readonly run: Get<Promise<void>>;
};

export declare type LaunchBackendStaticApplication = {
    readonly scriptFile: Get<FileEntry>;
    readonly scriptDirectory: Get<FileEntry>;
    readonly runDate: Get<DateTime>;
    readonly runUuid: Get<string>;
    readonly runId: Get<string>;
    readonly process: Get<NodeJS.Process>;
    readonly argv: Get<Argv>;
    readonly params: {
        readonly noCache: Get<boolean>;
        readonly runId: Get<string>;
    };
    readonly configuration: Get<Ipp5Configuration>;
    readonly builder: Get<Ipp5BackendStaticBuilder>;
    readonly launcher: Get<Ipp5BackendStaticLauncher>;
    readonly run: Get<Promise<void>>;
};

export declare type LaunchFrontendApplication = {
    readonly scriptFile: Get<FileEntry>;
    readonly scriptDirectory: Get<FileEntry>;
    readonly runDate: Get<DateTime>;
    readonly runUuid: Get<string>;
    readonly runId: Get<string>;
    readonly process: Get<NodeJS.Process>;
    readonly argv: Get<Argv>;
    readonly configuration: Get<Ipp5Configuration>;
    readonly params: {
        readonly noCache: Get<boolean>;
        readonly runId: Get<string>;
    };
    readonly builder: Get<Ipp5FrontendBuilder>;
    readonly launcher: Get<Ipp5FrontendLauncher>;
    readonly run: Get<Promise<void>>;
};

export declare type TerraformApplication = {
    readonly scriptFile: Get<FileEntry>;
    readonly scriptDirectory: Get<FileEntry>;
    readonly runDate: Get<DateTime>;
    readonly runUuid: Get<string>;
    readonly runId: Get<string>;
    readonly process: Get<NodeJS.Process>;
    readonly argv: Get<Argv>;
    readonly configuration: Get<Ipp5Configuration>;
    readonly terraformer: Get<Ipp5Terraformer>;
    readonly run: Get<Promise<void>>;
};
