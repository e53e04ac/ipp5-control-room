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
  click B_0 "https://github.com/e53e04ac/argv/tree/feed9bccce39d0b0241352d1a08bc00b72b51208";
  click B_1 "https://github.com/e53e04ac/base/tree/421cea548a7a50b26a6ada01d1d17b9a013b847c";
  click B_2 "https://github.com/e53e04ac/date-time/tree/3a4252375ebbbde82bc7305e2f0713d40921bea2";
  click B_3 "https://github.com/e53e04ac/event-emitter/tree/19614365368936f6974a633d25a1109a3465a99d";
  click B_4 "https://github.com/e53e04ac/file-entry-native/tree/9e08b922f13bb758e8a7d30ef925a82a96284e4e";
  click B_5 "https://github.com/e53e04ac/hold/tree/3191dd4704f3e5f90d6c27f288ede7700f5fdb66";
  click B_6 "https://github.com/e53e04ac/ipp5-backend-api-builder/tree/b330dbdfcac96a4cc9c81a341e20cf4b69f173e3";
  click B_7 "https://github.com/e53e04ac/ipp5-backend-api-launcher/tree/274351dd0548e22deb5d090fd657ed1c1dfffde2";
  click B_8 "https://github.com/e53e04ac/ipp5-backend-batch-builder/tree/d1f3882a22029fae56d5665c76918299a2162262";
  click B_9 "https://github.com/e53e04ac/ipp5-backend-batch-launcher/tree/7e29a19a2c901edc7910b4c25c091ab80edcf5cc";
  click B_10 "https://github.com/e53e04ac/ipp5-backend-idp-builder/tree/e73be6ef7452aef1a57619ad8d15fa2ada34db2a";
  click B_11 "https://github.com/e53e04ac/ipp5-backend-idp-launcher/tree/54ed39f2babf7466b3256fa052e7b3b4a7a1a324";
  click B_12 "https://github.com/e53e04ac/ipp5-backend-static-builder/tree/ba917e2be56297a036a6c59b98e57512787dea29";
  click B_13 "https://github.com/e53e04ac/ipp5-backend-static-launcher/tree/d539cc296fdd5c15c03ece5a8893702ac0a7873a";
  click B_14 "https://github.com/e53e04ac/ipp5-configuration/tree/034ac4dc969bf27b42b607d0874ad4ef2f5fcaa5";
  click B_15 "https://github.com/e53e04ac/ipp5-frontend-builder/tree/f2fb15a29962e5afeb8be7fb0fbe9da704a1c793";
  click B_16 "https://github.com/e53e04ac/ipp5-frontend-launcher/tree/2c0b9a8e18cb79817fef593523433d8d95bd5a3f";
  click B_17 "https://github.com/e53e04ac/ipp5-static-builder/tree/5426edb4195dc3763074e3e063b78d10f57658b0";
  click B_18 "https://github.com/e53e04ac/ipp5-terraformer/tree/5b2f921b57ff6ae1214db4ffd04bfe98b819975a";
  click B_19 "https://www.npmjs.com/package/@types/node/v/18.14.0";
  click B_20 "https://github.com/e53e04ac/file-entry/tree/c972d64414ab71efd73ea068fd42583938be938c";
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
