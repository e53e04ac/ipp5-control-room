# ipp5-control-room

~~~~~ sh
npm install e53e04ac/ipp5-control-room
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["argv"]);
    B_1(["base"]);
    B_2(["date-time"]);
    B_3(["event-emitter"]);
    B_4(["file-entry-native"]);
    B_5(["hold"]);
    B_6(["ipp5-backend-api-builder"]);
    B_7(["ipp5-backend-api-launcher"]);
    B_8(["ipp5-backend-batch-builder"]);
    B_9(["ipp5-backend-batch-launcher"]);
    B_10(["ipp5-backend-idp-builder"]);
    B_11(["ipp5-backend-idp-launcher"]);
    B_12(["ipp5-backend-static-builder"]);
    B_13(["ipp5-backend-static-launcher"]);
    B_14(["ipp5-configuration"]);
    B_15(["ipp5-frontend-builder"]);
    B_16(["ipp5-frontend-launcher"]);
    B_17(["ipp5-static-builder"]);
    B_18(["ipp5-terraformer"]);
  end;
  subgraph "devDependencies";
    B_19(["@types/node"]);
    B_20(["file-entry"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/argv\n5112ecebc438f202cc4f2a52f75540103890eff8"]);
    C_1(["e53e04ac/base\n670acc97a4738c5d59ad80088971762efc970b18"]);
    C_2(["e53e04ac/date-time\n2ffb85831cf65624c9fb3e1e15c79432404a3303"]);
    C_3(["e53e04ac/event-emitter\ndb90659b1c25a4e17e8a8dbf8920a630fd30321d"]);
    C_4(["e53e04ac/file-entry-native\n26c4ace9610606e884be3c2af2bf69fe10662193"]);
    C_5(["e53e04ac/hold\n472cfb85bada328cba9c6faddcf45b1241761027"]);
    C_6(["e53e04ac/ipp5-backend-api-builder\n8840a7171a2caf15e174861fae5dd18649799876"]);
    C_7(["e53e04ac/ipp5-backend-api-launcher\nb1f420840151b71b5cfa2a6642ad23d1f10d8145"]);
    C_8(["e53e04ac/ipp5-backend-batch-builder\n0f435c8bf2a26ced534a050fe45ddad2dcb7506e"]);
    C_9(["e53e04ac/ipp5-backend-batch-launcher\nd8eb1a93cc3232c52ef6839e5e325c7ef3199b16"]);
    C_10(["e53e04ac/ipp5-backend-idp-builder\n24f978956964bdf1864deced412810e886ed1a4d"]);
    C_11(["e53e04ac/ipp5-backend-idp-launcher\n761926045c4d976dfbcefb6e53c212545f0cffe8"]);
    C_12(["e53e04ac/ipp5-backend-static-builder\n33b86f418a494c97fb4634153158ee8b2fae5277"]);
    C_13(["e53e04ac/ipp5-backend-static-launcher\n312a256bfabfc03e4f10f9e4d412fd79f47f9e5d"]);
    C_14(["e53e04ac/ipp5-configuration\n0b56775b6c9d2897cd8ecf32672c53f64dc13d6b"]);
    C_15(["e53e04ac/ipp5-frontend-builder\n0f2f35edeba10592397a0a07c112cd3dbec34535"]);
    C_16(["e53e04ac/ipp5-frontend-launcher\ncf1fd6a98d6370f5f23ff457db574a5143780b7b"]);
    C_17(["e53e04ac/ipp5-static-builder\nb7c25458992b4fe7795730c54d2f95964d642e81"]);
    C_18(["e53e04ac/ipp5-terraformer\n188b19b1c42f5e2437eee8d4daa52b0544f27c1a"]);
    C_20(["e53e04ac/file-entry\n4ff5464c0df35db0fc552346c4011d115ebb4cde"]);
  end;
  subgraph "npmjs";
    C_19(["@types/node\n18.14.6"]);
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
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  B_6 ----> C_6;
  B_7 ----> C_7;
  B_8 ----> C_8;
  B_9 ----> C_9;
  B_10 ----> C_10;
  B_11 ----> C_11;
  B_12 ----> C_12;
  B_13 ----> C_13;
  B_14 ----> C_14;
  B_15 ----> C_15;
  B_16 ----> C_16;
  B_17 ----> C_17;
  B_18 ----> C_18;
  B_19 ----> C_19;
  B_20 ----> C_20;
  click C_0 "https://github.com/e53e04ac/argv/tree/5112ecebc438f202cc4f2a52f75540103890eff8";
  click C_1 "https://github.com/e53e04ac/base/tree/670acc97a4738c5d59ad80088971762efc970b18";
  click C_2 "https://github.com/e53e04ac/date-time/tree/2ffb85831cf65624c9fb3e1e15c79432404a3303";
  click C_3 "https://github.com/e53e04ac/event-emitter/tree/db90659b1c25a4e17e8a8dbf8920a630fd30321d";
  click C_4 "https://github.com/e53e04ac/file-entry-native/tree/26c4ace9610606e884be3c2af2bf69fe10662193";
  click C_5 "https://github.com/e53e04ac/hold/tree/472cfb85bada328cba9c6faddcf45b1241761027";
  click C_6 "https://github.com/e53e04ac/ipp5-backend-api-builder/tree/8840a7171a2caf15e174861fae5dd18649799876";
  click C_7 "https://github.com/e53e04ac/ipp5-backend-api-launcher/tree/b1f420840151b71b5cfa2a6642ad23d1f10d8145";
  click C_8 "https://github.com/e53e04ac/ipp5-backend-batch-builder/tree/0f435c8bf2a26ced534a050fe45ddad2dcb7506e";
  click C_9 "https://github.com/e53e04ac/ipp5-backend-batch-launcher/tree/d8eb1a93cc3232c52ef6839e5e325c7ef3199b16";
  click C_10 "https://github.com/e53e04ac/ipp5-backend-idp-builder/tree/24f978956964bdf1864deced412810e886ed1a4d";
  click C_11 "https://github.com/e53e04ac/ipp5-backend-idp-launcher/tree/761926045c4d976dfbcefb6e53c212545f0cffe8";
  click C_12 "https://github.com/e53e04ac/ipp5-backend-static-builder/tree/33b86f418a494c97fb4634153158ee8b2fae5277";
  click C_13 "https://github.com/e53e04ac/ipp5-backend-static-launcher/tree/312a256bfabfc03e4f10f9e4d412fd79f47f9e5d";
  click C_14 "https://github.com/e53e04ac/ipp5-configuration/tree/0b56775b6c9d2897cd8ecf32672c53f64dc13d6b";
  click C_15 "https://github.com/e53e04ac/ipp5-frontend-builder/tree/0f2f35edeba10592397a0a07c112cd3dbec34535";
  click C_16 "https://github.com/e53e04ac/ipp5-frontend-launcher/tree/cf1fd6a98d6370f5f23ff457db574a5143780b7b";
  click C_17 "https://github.com/e53e04ac/ipp5-static-builder/tree/b7c25458992b4fe7795730c54d2f95964d642e81";
  click C_18 "https://github.com/e53e04ac/ipp5-terraformer/tree/188b19b1c42f5e2437eee8d4daa52b0544f27c1a";
  click C_19 "https://www.npmjs.com/package/@types/node/v/18.14.6";
  click C_20 "https://github.com/e53e04ac/file-entry/tree/4ff5464c0df35db0fc552346c4011d115ebb4cde";
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
  M["index.d.ts"]
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

~~~~~ mermaid
graph RL;
  M["build-static.mjs"]
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
  M["generate-keys.mjs"]
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
  M["index.mjs"]
~~~~~

~~~~~ mermaid
graph RL;
  M["launch-backend-api.mjs"]
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
  M["launch-backend-batch.mjs"]
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
  M["launch-backend-idp.mjs"]
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
  M["launch-backend-static.mjs"]
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
  M["launch-frontend.mjs"]
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
  M["terraform.mjs"]
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
