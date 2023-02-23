# ipp5-control-room

~~~~~ sh
npm install e53e04ac/ipp5-control-room
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/argv"]);
    B_1(["e53e04ac/base"]);
    B_2(["e53e04ac/date-time"]);
    B_3(["e53e04ac/event-emitter"]);
    B_4(["e53e04ac/file-entry-native"]);
    B_5(["e53e04ac/hold"]);
    B_6(["e53e04ac/ipp5-backend-api-builder"]);
    B_7(["e53e04ac/ipp5-backend-api-launcher"]);
    B_8(["e53e04ac/ipp5-backend-batch-builder"]);
    B_9(["e53e04ac/ipp5-backend-batch-launcher"]);
    B_10(["e53e04ac/ipp5-backend-idp-builder"]);
    B_11(["e53e04ac/ipp5-backend-idp-launcher"]);
    B_12(["e53e04ac/ipp5-backend-static-builder"]);
    B_13(["e53e04ac/ipp5-backend-static-launcher"]);
    B_14(["e53e04ac/ipp5-configuration"]);
    B_15(["e53e04ac/ipp5-frontend-builder"]);
    B_16(["e53e04ac/ipp5-frontend-launcher"]);
    B_17(["e53e04ac/ipp5-static-builder"]);
    B_18(["e53e04ac/ipp5-terraformer"]);
  end;
  subgraph "devDependencies";
    B_19(["@types/node"]);
    B_20(["e53e04ac/file-entry"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  A ----> B_7;
  A ----> B_8;
  A ----> B_9;
  A ----> B_10;
  A ----> B_11;
  A ----> B_12;
  A ----> B_13;
  A ----> B_14;
  A ----> B_15;
  A ----> B_16;
  A ----> B_17;
  A ----> B_18;
  A ----> B_19;
  A ----> B_20;
  click B_0 "https://github.com/e53e04ac/argv/tree/1575862ec3200db675cdd8aec5d9bc4da5eb1b11";
  click B_1 "https://github.com/e53e04ac/base/tree/fc0fe75d4737062206ea1b99def2b1b2df6b99fa";
  click B_2 "https://github.com/e53e04ac/date-time/tree/938d21223ea8acca6858650fa223280897c82b7a";
  click B_3 "https://github.com/e53e04ac/event-emitter/tree/faf256d4d2350ffa0af1fed794236faa4f0740a1";
  click B_4 "https://github.com/e53e04ac/file-entry-native/tree/9f6065504bf14be690aee1bb9beb982b21eef0d2";
  click B_5 "https://github.com/e53e04ac/hold/tree/443c2e801bbe20409c761994a91fa88fb6044602";
  click B_6 "https://github.com/e53e04ac/ipp5-backend-api-builder/tree/fcc2a6565b145b604ea3a536ffae347dfaa3deda";
  click B_7 "https://github.com/e53e04ac/ipp5-backend-api-launcher/tree/9c671f21b79ef33559e31426f1bd24162bf1b194";
  click B_8 "https://github.com/e53e04ac/ipp5-backend-batch-builder/tree/70ccd2dd388199253b31d5f4bc832391733c7329";
  click B_9 "https://github.com/e53e04ac/ipp5-backend-batch-launcher/tree/51da9200e7f3d0f7382bdf4776ff6f217ac65008";
  click B_10 "https://github.com/e53e04ac/ipp5-backend-idp-builder/tree/24470c67bc87a35dc1da829f95fadb8e9cad085e";
  click B_11 "https://github.com/e53e04ac/ipp5-backend-idp-launcher/tree/843f4d563e90cf88f1b0e2e86480804fcadb22ec";
  click B_12 "https://github.com/e53e04ac/ipp5-backend-static-builder/tree/5617aa9a8ccd0bc64d71816756832db6a0ce571a";
  click B_13 "https://github.com/e53e04ac/ipp5-backend-static-launcher/tree/bc13483da0e6634eef6e74fc6cbae299bc54908f";
  click B_14 "https://github.com/e53e04ac/ipp5-configuration/tree/30fcc2801d4369299b61a9e6e8a1ae69c2924333";
  click B_15 "https://github.com/e53e04ac/ipp5-frontend-builder/tree/d1cf0719fc6463392609edcb90d366d7a9cd44e5";
  click B_16 "https://github.com/e53e04ac/ipp5-frontend-launcher/tree/e085ffca84fbf9ced11efe45ff884f6b0d37d985";
  click B_17 "https://github.com/e53e04ac/ipp5-static-builder/tree/3ec4953713d69861ce9d9ff36069fbe5826333a5";
  click B_18 "https://github.com/e53e04ac/ipp5-terraformer/tree/fb42b7efb85d6c1bb463344ce0af3ad5de87d6b6";
  click B_19 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click B_20 "https://github.com/e53e04ac/file-entry/tree/69045717124e824d6d83b98b6866fcafe8f295ef";
~~~~~

~~~~~ mermaid
graph RL;
  M(["build-static.mjs"])
  subgraph "node:crypto";
    I_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    I_1_0(["Argv"]);
  end;
  subgraph "date-time";
    I_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    I_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
  end;
  subgraph "ipp5-configuration";
    I_5_0(["Ipp5Configuration"]);
  end;
  subgraph "ipp5-static-builder";
    I_6_0(["Ipp5StaticBuilder"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
~~~~~

~~~~~ mermaid
graph RL;
  M(["generate-keys.mjs"])
  subgraph "node:crypto";
    I_0_0(["randomUUID"]);
    I_0_1(["webcrypto"]);
  end;
  subgraph "argv";
    I_1_0(["Argv"]);
  end;
  subgraph "date-time";
    I_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    I_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
~~~~~

~~~~~ mermaid
graph RL;
  M(["index.mjs"])
~~~~~

~~~~~ mermaid
graph RL;
  M(["launch-backend-api.mjs"])
  subgraph "node:crypto";
    I_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    I_1_0(["Argv"]);
  end;
  subgraph "date-time";
    I_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    I_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
  end;
  subgraph "ipp5-backend-api-builder";
    I_5_0(["Ipp5BackendApiBuilder"]);
  end;
  subgraph "ipp5-backend-api-launcher";
    I_6_0(["Ipp5BackendApiLauncher"]);
  end;
  subgraph "ipp5-configuration";
    I_7_0(["Ipp5Configuration"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
~~~~~

~~~~~ mermaid
graph RL;
  M(["launch-backend-batch.mjs"])
  subgraph "node:crypto";
    I_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    I_1_0(["Argv"]);
  end;
  subgraph "date-time";
    I_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    I_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
  end;
  subgraph "ipp5-backend-batch-builder";
    I_5_0(["Ipp5BackendBatchBuilder"]);
  end;
  subgraph "ipp5-backend-batch-launcher";
    I_6_0(["Ipp5BackendBatchLauncher"]);
  end;
  subgraph "ipp5-configuration";
    I_7_0(["Ipp5Configuration"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
~~~~~

~~~~~ mermaid
graph RL;
  M(["launch-backend-idp.mjs"])
  subgraph "node:crypto";
    I_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    I_1_0(["Argv"]);
  end;
  subgraph "date-time";
    I_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    I_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
  end;
  subgraph "ipp5-backend-idp-builder";
    I_5_0(["Ipp5BackendIdpBuilder"]);
  end;
  subgraph "ipp5-backend-idp-launcher";
    I_6_0(["Ipp5BackendIdpLauncher"]);
  end;
  subgraph "ipp5-configuration";
    I_7_0(["Ipp5Configuration"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
~~~~~

~~~~~ mermaid
graph RL;
  M(["launch-backend-static.mjs"])
  subgraph "node:crypto";
    I_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    I_1_0(["Argv"]);
  end;
  subgraph "date-time";
    I_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    I_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
  end;
  subgraph "ipp5-backend-static-builder";
    I_5_0(["Ipp5BackendStaticBuilder"]);
  end;
  subgraph "ipp5-backend-static-launcher";
    I_6_0(["Ipp5BackendStaticLauncher"]);
  end;
  subgraph "ipp5-configuration";
    I_7_0(["Ipp5Configuration"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
~~~~~

~~~~~ mermaid
graph RL;
  M(["launch-frontend.mjs"])
  subgraph "node:crypto";
    I_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    I_1_0(["Argv"]);
  end;
  subgraph "date-time";
    I_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    I_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
  end;
  subgraph "ipp5-configuration";
    I_5_0(["Ipp5Configuration"]);
  end;
  subgraph "ipp5-frontend-builder";
    I_6_0(["Ipp5FrontendBuilder"]);
  end;
  subgraph "ipp5-frontend-launcher";
    I_7_0(["Ipp5FrontendLauncher"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
~~~~~

~~~~~ mermaid
graph RL;
  M(["terraform.mjs"])
  subgraph "node:crypto";
    I_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    I_1_0(["Argv"]);
  end;
  subgraph "date-time";
    I_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    I_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_4_0(["hold"]);
  end;
  subgraph "ipp5-configuration";
    I_5_0(["Ipp5Configuration"]);
  end;
  subgraph "ipp5-terraformer";
    I_6_0(["Ipp5Terraformer"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-control-room";
    E_0(["type BuildStaticApplication"]);
    E_1(["type GenerateKeysApplication"]);
    E_2(["type LaunchBackendApiApplication"]);
    E_3(["type LaunchBackendBatchApplication"]);
    E_4(["type LaunchBackendIdpApplication"]);
    E_5(["type LaunchBackendStaticApplication"]);
    E_6(["type LaunchFrontendApplication"]);
    E_7(["type TerraformApplication"]);
  end;
  M(["index.d.ts"])
  subgraph "argv";
    I_0_0(["Argv"]);
  end;
  subgraph "date-time";
    I_1_0(["DateTime"]);
  end;
  subgraph "file-entry";
    I_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_3_0(["Get"]);
  end;
  subgraph "ipp5-backend-api-builder";
    I_4_0(["Ipp5BackendApiBuilder"]);
  end;
  subgraph "ipp5-backend-api-launcher";
    I_5_0(["Ipp5BackendApiLauncher"]);
  end;
  subgraph "ipp5-backend-batch-builder";
    I_6_0(["Ipp5BackendBatchBuilder"]);
  end;
  subgraph "ipp5-backend-batch-launcher";
    I_7_0(["Ipp5BackendBatchLauncher"]);
  end;
  subgraph "ipp5-backend-idp-builder";
    I_8_0(["Ipp5BackendIdpBuilder"]);
  end;
  subgraph "ipp5-backend-idp-launcher";
    I_9_0(["Ipp5BackendIdpLauncher"]);
  end;
  subgraph "ipp5-backend-static-builder";
    I_10_0(["Ipp5BackendStaticBuilder"]);
  end;
  subgraph "ipp5-backend-static-launcher";
    I_11_0(["Ipp5BackendStaticLauncher"]);
  end;
  subgraph "ipp5-configuration";
    I_12_0(["Ipp5Configuration"]);
  end;
  subgraph "ipp5-frontend-builder";
    I_13_0(["Ipp5FrontendBuilder"]);
  end;
  subgraph "ipp5-frontend-launcher";
    I_14_0(["Ipp5FrontendLauncher"]);
  end;
  subgraph "ipp5-static-builder";
    I_15_0(["Ipp5StaticBuilder"]);
  end;
  subgraph "ipp5-terraformer";
    I_16_0(["Ipp5Terraformer"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_4_0;
  M ----> I_5_0;
  M ----> I_6_0;
  M ----> I_7_0;
  M ----> I_8_0;
  M ----> I_9_0;
  M ----> I_10_0;
  M ----> I_11_0;
  M ----> I_12_0;
  M ----> I_13_0;
  M ----> I_14_0;
  M ----> I_15_0;
  M ----> I_16_0;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
  E_3 ----> M;
  E_4 ----> M;
  E_5 ----> M;
  E_6 ----> M;
  E_7 ----> M;
~~~~~
