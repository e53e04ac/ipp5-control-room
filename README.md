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
  click B_0 "https://github.com/e53e04ac/argv/tree/c5fe5ecf71c9d57263d9c1744b3d5f12eac61c1c";
  click B_1 "https://github.com/e53e04ac/base/tree/2dc903faf7859d755dd52f7fde706be5170b9a6f";
  click B_2 "https://github.com/e53e04ac/date-time/tree/4fd63ae52ea7346e85ed0a355f4c4b72c713345a";
  click B_3 "https://github.com/e53e04ac/event-emitter/tree/0c338d821268a5f0aaa42481216fd2e73c8734c9";
  click B_4 "https://github.com/e53e04ac/file-entry-native/tree/874175e9fe9373cd4b0ce7d96ef744f2e41898b0";
  click B_5 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_6 "https://github.com/e53e04ac/ipp5-backend-api-builder/tree/9d6f89a12008fbb0bdb2c85af8d37a1788dce91f";
  click B_7 "https://github.com/e53e04ac/ipp5-backend-api-launcher/tree/53320b24f2933c6f8f674e02fbc6a00729b1c3a7";
  click B_8 "https://github.com/e53e04ac/ipp5-backend-batch-builder/tree/150b14d6bbb99094e34f0b303c1a883fcddcbdfc";
  click B_9 "https://github.com/e53e04ac/ipp5-backend-batch-launcher/tree/445a94f66f56efe14c550d83be40c067e62b8723";
  click B_10 "https://github.com/e53e04ac/ipp5-backend-idp-builder/tree/127b9185344fd1a1265946365924acf0420c5263";
  click B_11 "https://github.com/e53e04ac/ipp5-backend-idp-launcher/tree/f7dc355f70ef08b1aa8464ccca769dd1a139f561";
  click B_12 "https://github.com/e53e04ac/ipp5-backend-static-builder/tree/a304ad12a695545edb5d7709f7c74e0bd6021b7c";
  click B_13 "https://github.com/e53e04ac/ipp5-backend-static-launcher/tree/4da752ad91360bd786746cd834620cf61cb0a8b7";
  click B_14 "https://github.com/e53e04ac/ipp5-configuration/tree/ffcf50c4f21af8ae25a7df8bb91b37d38e2f7f4e";
  click B_15 "https://github.com/e53e04ac/ipp5-frontend-builder/tree/ceed3b01a18f104a8e03ad3aa5390e08e9f311be";
  click B_16 "https://github.com/e53e04ac/ipp5-frontend-launcher/tree/d606f47e766e7a0e55b9c120422140c59caff129";
  click B_17 "https://github.com/e53e04ac/ipp5-static-builder/tree/f4524495e9fc88159a0cbe295376729c89c5ff61";
  click B_18 "https://github.com/e53e04ac/ipp5-terraformer/tree/59ed979202b385a3a11e574638a6297b65401036";
  click B_19 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_20 "https://github.com/e53e04ac/file-entry/tree/54166105381939e5a1c4dee0af1f44705e5f44bc";
~~~~~

~~~~~ mermaid
graph RL;
  A(["build-static.mjs"])
  subgraph "node:crypto";
    B_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    B_1_0(["Argv"]);
  end;
  subgraph "date-time";
    B_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    B_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
  end;
  subgraph "ipp5-configuration";
    B_5_0(["Ipp5Configuration"]);
  end;
  subgraph "ipp5-static-builder";
    B_6_0(["Ipp5StaticBuilder"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
  A ----> B_5_0;
  A ----> B_6_0;
~~~~~

~~~~~ mermaid
graph RL;
  A(["generate-keys.mjs"])
  subgraph "node:crypto";
    B_0_0(["randomUUID"]);
    B_0_1(["webcrypto"]);
  end;
  subgraph "argv";
    B_1_0(["Argv"]);
  end;
  subgraph "date-time";
    B_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    B_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
  end;
  A ----> B_0_0;
  A ----> B_0_1;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
~~~~~

~~~~~ mermaid
graph RL;
  A(["index.mjs"])
~~~~~

~~~~~ mermaid
graph RL;
  A(["launch-backend-api.mjs"])
  subgraph "node:crypto";
    B_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    B_1_0(["Argv"]);
  end;
  subgraph "date-time";
    B_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    B_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
  end;
  subgraph "ipp5-backend-api-builder";
    B_5_0(["Ipp5BackendApiBuilder"]);
  end;
  subgraph "ipp5-backend-api-launcher";
    B_6_0(["Ipp5BackendApiLauncher"]);
  end;
  subgraph "ipp5-configuration";
    B_7_0(["Ipp5Configuration"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
  A ----> B_5_0;
  A ----> B_6_0;
  A ----> B_7_0;
~~~~~

~~~~~ mermaid
graph RL;
  A(["launch-backend-batch.mjs"])
  subgraph "node:crypto";
    B_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    B_1_0(["Argv"]);
  end;
  subgraph "date-time";
    B_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    B_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
  end;
  subgraph "ipp5-backend-batch-builder";
    B_5_0(["Ipp5BackendBatchBuilder"]);
  end;
  subgraph "ipp5-backend-batch-launcher";
    B_6_0(["Ipp5BackendBatchLauncher"]);
  end;
  subgraph "ipp5-configuration";
    B_7_0(["Ipp5Configuration"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
  A ----> B_5_0;
  A ----> B_6_0;
  A ----> B_7_0;
~~~~~

~~~~~ mermaid
graph RL;
  A(["launch-backend-idp.mjs"])
  subgraph "node:crypto";
    B_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    B_1_0(["Argv"]);
  end;
  subgraph "date-time";
    B_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    B_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
  end;
  subgraph "ipp5-backend-idp-builder";
    B_5_0(["Ipp5BackendIdpBuilder"]);
  end;
  subgraph "ipp5-backend-idp-launcher";
    B_6_0(["Ipp5BackendIdpLauncher"]);
  end;
  subgraph "ipp5-configuration";
    B_7_0(["Ipp5Configuration"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
  A ----> B_5_0;
  A ----> B_6_0;
  A ----> B_7_0;
~~~~~

~~~~~ mermaid
graph RL;
  A(["launch-backend-static.mjs"])
  subgraph "node:crypto";
    B_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    B_1_0(["Argv"]);
  end;
  subgraph "date-time";
    B_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    B_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
  end;
  subgraph "ipp5-backend-static-builder";
    B_5_0(["Ipp5BackendStaticBuilder"]);
  end;
  subgraph "ipp5-backend-static-launcher";
    B_6_0(["Ipp5BackendStaticLauncher"]);
  end;
  subgraph "ipp5-configuration";
    B_7_0(["Ipp5Configuration"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
  A ----> B_5_0;
  A ----> B_6_0;
  A ----> B_7_0;
~~~~~

~~~~~ mermaid
graph RL;
  A(["launch-frontend.mjs"])
  subgraph "node:crypto";
    B_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    B_1_0(["Argv"]);
  end;
  subgraph "date-time";
    B_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    B_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
  end;
  subgraph "ipp5-configuration";
    B_5_0(["Ipp5Configuration"]);
  end;
  subgraph "ipp5-frontend-builder";
    B_6_0(["Ipp5FrontendBuilder"]);
  end;
  subgraph "ipp5-frontend-launcher";
    B_7_0(["Ipp5FrontendLauncher"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
  A ----> B_5_0;
  A ----> B_6_0;
  A ----> B_7_0;
~~~~~

~~~~~ mermaid
graph RL;
  A(["terraform.mjs"])
  subgraph "node:crypto";
    B_0_0(["randomUUID"]);
  end;
  subgraph "argv";
    B_1_0(["Argv"]);
  end;
  subgraph "date-time";
    B_2_0(["DateTime"]);
  end;
  subgraph "file-entry-native";
    B_3_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_4_0(["hold"]);
  end;
  subgraph "ipp5-configuration";
    B_5_0(["Ipp5Configuration"]);
  end;
  subgraph "ipp5-terraformer";
    B_6_0(["Ipp5Terraformer"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
  A ----> B_5_0;
  A ----> B_6_0;
~~~~~

~~~~~ mermaid
graph RL;
  A(["index.d.ts"])
  subgraph "argv";
    B_0_0(["Argv"]);
  end;
  subgraph "date-time";
    B_1_0(["DateTime"]);
  end;
  subgraph "file-entry";
    B_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_3_0(["Get"]);
  end;
  subgraph "ipp5-backend-api-builder";
    B_4_0(["Ipp5BackendApiBuilder"]);
  end;
  subgraph "ipp5-backend-api-launcher";
    B_5_0(["Ipp5BackendApiLauncher"]);
  end;
  subgraph "ipp5-backend-batch-builder";
    B_6_0(["Ipp5BackendBatchBuilder"]);
  end;
  subgraph "ipp5-backend-batch-launcher";
    B_7_0(["Ipp5BackendBatchLauncher"]);
  end;
  subgraph "ipp5-backend-idp-builder";
    B_8_0(["Ipp5BackendIdpBuilder"]);
  end;
  subgraph "ipp5-backend-idp-launcher";
    B_9_0(["Ipp5BackendIdpLauncher"]);
  end;
  subgraph "ipp5-backend-static-builder";
    B_10_0(["Ipp5BackendStaticBuilder"]);
  end;
  subgraph "ipp5-backend-static-launcher";
    B_11_0(["Ipp5BackendStaticLauncher"]);
  end;
  subgraph "ipp5-configuration";
    B_12_0(["Ipp5Configuration"]);
  end;
  subgraph "ipp5-frontend-builder";
    B_13_0(["Ipp5FrontendBuilder"]);
  end;
  subgraph "ipp5-frontend-launcher";
    B_14_0(["Ipp5FrontendLauncher"]);
  end;
  subgraph "ipp5-static-builder";
    B_15_0(["Ipp5StaticBuilder"]);
  end;
  subgraph "ipp5-terraformer";
    B_16_0(["Ipp5Terraformer"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_3_0;
  A ----> B_4_0;
  A ----> B_5_0;
  A ----> B_6_0;
  A ----> B_7_0;
  A ----> B_8_0;
  A ----> B_9_0;
  A ----> B_10_0;
  A ----> B_11_0;
  A ----> B_12_0;
  A ----> B_13_0;
  A ----> B_14_0;
  A ----> B_15_0;
  A ----> B_16_0;
~~~~~
