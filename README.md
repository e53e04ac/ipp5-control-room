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
    C_0(["e53e04ac/argv\n3851fd0e7ae587348ca8a22f3daddacfb3fc8d52"]);
    C_1(["e53e04ac/base\ne2bddac982e446c64fef1513a9a306edefd508a1"]);
    C_2(["e53e04ac/date-time\n2c1415907602b94ed40ec6cb882d10a4d5d35474"]);
    C_3(["e53e04ac/event-emitter\nfe89a990ada06652bfffee75818dff0445762cd1"]);
    C_4(["e53e04ac/file-entry-native\n8cf50e81fe937ed0d787537f04ed0e5518950c90"]);
    C_5(["e53e04ac/hold\n8575e49e6bfe80ba61782e3a8f9eb80f78776713"]);
    C_6(["e53e04ac/ipp5-backend-api-builder\nde96ff7662779b8a21dff782ae84b5bf2aad1f02"]);
    C_7(["e53e04ac/ipp5-backend-api-launcher\nd7906dd726b67ccd435775e2121ba09939d16b68"]);
    C_8(["e53e04ac/ipp5-backend-batch-builder\naca69c6a13d64766eb4282b85d82735669179c0b"]);
    C_9(["e53e04ac/ipp5-backend-batch-launcher\n3628f27bb4a7156f2cb8b7258d82370ff4a05fd0"]);
    C_10(["e53e04ac/ipp5-backend-idp-builder\n6d2d606832d734fe5886fd65023adb9ac82995f1"]);
    C_11(["e53e04ac/ipp5-backend-idp-launcher\n11802661b19267c91936f65a04c57f2c9ab8d854"]);
    C_12(["e53e04ac/ipp5-backend-static-builder\ndcecb3ff1ee04d1d1b1852812a48744d60aba546"]);
    C_13(["e53e04ac/ipp5-backend-static-launcher\ne3098936ad7acfdedb9f225a0d701aa421cbd9c0"]);
    C_14(["e53e04ac/ipp5-configuration\na1700b3123719b2a28e33650a480436595650989"]);
    C_15(["e53e04ac/ipp5-frontend-builder\n701190eb332cfcb8574a97cd64f0ef9e35a146c9"]);
    C_16(["e53e04ac/ipp5-frontend-launcher\n2e3dfa441fed759d205df080631ecb7b89331124"]);
    C_17(["e53e04ac/ipp5-static-builder\n97ab05f1cf96d3a70cb235e4ee932cb5b0adbd52"]);
    C_18(["e53e04ac/ipp5-terraformer\na6063b5ff16a1afd179024c37018b9e57540ca31"]);
    C_20(["e53e04ac/file-entry\n5562ecc181baea1a9b666fd9490bfabd2c155d30"]);
  end;
  subgraph "npmjs";
    C_19(["@types/node\n18.14.5"]);
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
  click C_0 "https://github.com/e53e04ac/argv/tree/3851fd0e7ae587348ca8a22f3daddacfb3fc8d52";
  click C_1 "https://github.com/e53e04ac/base/tree/e2bddac982e446c64fef1513a9a306edefd508a1";
  click C_2 "https://github.com/e53e04ac/date-time/tree/2c1415907602b94ed40ec6cb882d10a4d5d35474";
  click C_3 "https://github.com/e53e04ac/event-emitter/tree/fe89a990ada06652bfffee75818dff0445762cd1";
  click C_4 "https://github.com/e53e04ac/file-entry-native/tree/8cf50e81fe937ed0d787537f04ed0e5518950c90";
  click C_5 "https://github.com/e53e04ac/hold/tree/8575e49e6bfe80ba61782e3a8f9eb80f78776713";
  click C_6 "https://github.com/e53e04ac/ipp5-backend-api-builder/tree/de96ff7662779b8a21dff782ae84b5bf2aad1f02";
  click C_7 "https://github.com/e53e04ac/ipp5-backend-api-launcher/tree/d7906dd726b67ccd435775e2121ba09939d16b68";
  click C_8 "https://github.com/e53e04ac/ipp5-backend-batch-builder/tree/aca69c6a13d64766eb4282b85d82735669179c0b";
  click C_9 "https://github.com/e53e04ac/ipp5-backend-batch-launcher/tree/3628f27bb4a7156f2cb8b7258d82370ff4a05fd0";
  click C_10 "https://github.com/e53e04ac/ipp5-backend-idp-builder/tree/6d2d606832d734fe5886fd65023adb9ac82995f1";
  click C_11 "https://github.com/e53e04ac/ipp5-backend-idp-launcher/tree/11802661b19267c91936f65a04c57f2c9ab8d854";
  click C_12 "https://github.com/e53e04ac/ipp5-backend-static-builder/tree/dcecb3ff1ee04d1d1b1852812a48744d60aba546";
  click C_13 "https://github.com/e53e04ac/ipp5-backend-static-launcher/tree/e3098936ad7acfdedb9f225a0d701aa421cbd9c0";
  click C_14 "https://github.com/e53e04ac/ipp5-configuration/tree/a1700b3123719b2a28e33650a480436595650989";
  click C_15 "https://github.com/e53e04ac/ipp5-frontend-builder/tree/701190eb332cfcb8574a97cd64f0ef9e35a146c9";
  click C_16 "https://github.com/e53e04ac/ipp5-frontend-launcher/tree/2e3dfa441fed759d205df080631ecb7b89331124";
  click C_17 "https://github.com/e53e04ac/ipp5-static-builder/tree/97ab05f1cf96d3a70cb235e4ee932cb5b0adbd52";
  click C_18 "https://github.com/e53e04ac/ipp5-terraformer/tree/a6063b5ff16a1afd179024c37018b9e57540ca31";
  click C_19 "https://www.npmjs.com/package/@types/node/v/18.14.5";
  click C_20 "https://github.com/e53e04ac/file-entry/tree/5562ecc181baea1a9b666fd9490bfabd2c155d30";
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
