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
  click B_0 "https://github.com/e53e04ac/argv/tree/7f6845ec9a66e26a9e3527b39dc5a93359b2f699";
  click B_1 "https://github.com/e53e04ac/base/tree/ddd2c718686c0629e497f4fa610d1979aac40c8a";
  click B_2 "https://github.com/e53e04ac/date-time/tree/87fffc05dcc08cfe9659b652c44bde6e8eb956d2";
  click B_3 "https://github.com/e53e04ac/event-emitter/tree/9a08c4203bfae12e94f36c9496c256c69fdd2277";
  click B_4 "https://github.com/e53e04ac/file-entry-native/tree/3c7e8e20a8f04f390eaec31c9e9654c9fe219797";
  click B_5 "https://github.com/e53e04ac/hold/tree/49707680ccdf4c5673f64ff0bab30f408269b328";
  click B_6 "https://github.com/e53e04ac/ipp5-backend-api-builder/tree/f6969929eb0e80cd5aa302a68f07a5c062e4a629";
  click B_7 "https://github.com/e53e04ac/ipp5-backend-api-launcher/tree/d907b941da55429eea8f823c71a990da95617abf";
  click B_8 "https://github.com/e53e04ac/ipp5-backend-batch-builder/tree/f1786bf03b7507672fdef9e29c6cd38ccd401640";
  click B_9 "https://github.com/e53e04ac/ipp5-backend-batch-launcher/tree/2dcb524cd6eb7269a5b0c945c1143e001b8137eb";
  click B_10 "https://github.com/e53e04ac/ipp5-backend-idp-builder/tree/e0c910e04302b67321864088332a108071bce79f";
  click B_11 "https://github.com/e53e04ac/ipp5-backend-idp-launcher/tree/77ebd8d7bbc666d7fafc464402feca419b3a9eb2";
  click B_12 "https://github.com/e53e04ac/ipp5-backend-static-builder/tree/67544cd12a049896e2b039c596de23a58c9350ea";
  click B_13 "https://github.com/e53e04ac/ipp5-backend-static-launcher/tree/0481988dd08e2f832357c8147d02cabb0182a090";
  click B_14 "https://github.com/e53e04ac/ipp5-configuration/tree/0ecff4fa8245386fb7da062ec1fb14171689d0d8";
  click B_15 "https://github.com/e53e04ac/ipp5-frontend-builder/tree/b8b87db2635b8aa5a5474abcb1c3a1017173438a";
  click B_16 "https://github.com/e53e04ac/ipp5-frontend-launcher/tree/a06bacbc48f3bf78426cf9fb90d4aadbd9a3d2e2";
  click B_17 "https://github.com/e53e04ac/ipp5-static-builder/tree/dcab0460002bf2ea40db3e0367ca0f6f876a917c";
  click B_18 "https://github.com/e53e04ac/ipp5-terraformer/tree/dfcde253a38f25c8cf5d52932d62982da3a7a32c";
  click B_19 "https://www.npmjs.org/package/@types/node/v/18.14.0";
  click B_20 "https://github.com/e53e04ac/file-entry/tree/c2cb299755ce1e1acd4da616865b44ea054e9291";
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
