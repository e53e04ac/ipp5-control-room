# ipp5-control-room

~~~~~ sh
npm install e53e04ac/ipp5-control-room
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-control-room"]);
  subgraph "dependencies";
    B_0(["e53e04ac/argv"]);
    B_1(["e53e04ac/base"]);
    B_2(["e53e04ac/date-time"]);
    B_3(["e53e04ac/event-emitter"]);
    B_4(["e53e04ac/file-entry"]);
    B_5(["e53e04ac/file-entry-native"]);
    B_6(["e53e04ac/hold"]);
    B_7(["e53e04ac/ipp5-backend-api-builder"]);
    B_8(["e53e04ac/ipp5-backend-api-launcher"]);
    B_9(["e53e04ac/ipp5-backend-batch-builder"]);
    B_10(["e53e04ac/ipp5-backend-batch-launcher"]);
    B_11(["e53e04ac/ipp5-backend-idp-builder"]);
    B_12(["e53e04ac/ipp5-backend-idp-launcher"]);
    B_13(["e53e04ac/ipp5-backend-static-builder"]);
    B_14(["e53e04ac/ipp5-backend-static-launcher"]);
    B_15(["e53e04ac/ipp5-configuration"]);
    B_16(["e53e04ac/ipp5-frontend-builder"]);
    B_17(["e53e04ac/ipp5-frontend-launcher"]);
    B_18(["e53e04ac/ipp5-static-builder"]);
    B_19(["e53e04ac/ipp5-terraformer"]);
  end;
  subgraph "devDependencies";
    B_20(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  A --reference--> B_6;
  A --reference--> B_7;
  A --reference--> B_8;
  A --reference--> B_9;
  A --reference--> B_10;
  A --reference--> B_11;
  A --reference--> B_12;
  A --reference--> B_13;
  A --reference--> B_14;
  A --reference--> B_15;
  A --reference--> B_16;
  A --reference--> B_17;
  A --reference--> B_18;
  A --reference--> B_19;
  A --reference--> B_20;
  click B_0 "https://github.com/e53e04ac/argv/tree/7f6e7b9e4a7721a85cd49d8112894d79abd5d3e1";
  click B_1 "https://github.com/e53e04ac/base/tree/86bc9dc951e32d7e173b8e7bf020b9439d75f8f7";
  click B_2 "https://github.com/e53e04ac/date-time/tree/3bc7edc1e247d2179c47b97bdefa4c6ade450f33";
  click B_3 "https://github.com/e53e04ac/event-emitter/tree/964765f7141bb2ab94b8dc1b5c41323a8b8ab1e3";
  click B_4 "https://github.com/e53e04ac/file-entry/tree/3121d37092abe3439372f24817a295aa5ed10d7e";
  click B_5 "https://github.com/e53e04ac/file-entry-native/tree/f3bab6d7be77c1e3b2791f82201dd2195639be66";
  click B_6 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
  click B_7 "https://github.com/e53e04ac/ipp5-backend-api-builder/tree/077110a3526ec80a6f52a6cf4670405723406d17";
  click B_8 "https://github.com/e53e04ac/ipp5-backend-api-launcher/tree/a7de1f70f0048e91cdc06de82ca7f393fe8fe39c";
  click B_9 "https://github.com/e53e04ac/ipp5-backend-batch-builder/tree/cbe9eb67405f4a9f087692b044bbcd3fa5e3b131";
  click B_10 "https://github.com/e53e04ac/ipp5-backend-batch-launcher/tree/dccbabac6a301dc28e0228d09afbcc9aabfdb000";
  click B_11 "https://github.com/e53e04ac/ipp5-backend-idp-builder/tree/692a7ee01e3de71ff9f99ef1fdbfacae6c55e698";
  click B_12 "https://github.com/e53e04ac/ipp5-backend-idp-launcher/tree/d1134e97ed38db5a4556a135d3b547e65bcf33d2";
  click B_13 "https://github.com/e53e04ac/ipp5-backend-static-builder/tree/ca354e3e42da01b4136b8673140ef542ddff7674";
  click B_14 "https://github.com/e53e04ac/ipp5-backend-static-launcher/tree/75a9ec502db1ea2ec8c3821fd87f1a751c32298d";
  click B_15 "https://github.com/e53e04ac/ipp5-configuration/tree/788eb02972a88181153d322227d722c784f825df";
  click B_16 "https://github.com/e53e04ac/ipp5-frontend-builder/tree/5cdf8035e598756b433fd0ef9ad59a38c886d3cf";
  click B_17 "https://github.com/e53e04ac/ipp5-frontend-launcher/tree/2eea4502d95326354118a7b5ddbe21e0b1706c4e";
  click B_18 "https://github.com/e53e04ac/ipp5-static-builder/tree/a0cb0db154c4684234861aec7e827f70fae37a48";
  click B_19 "https://github.com/e53e04ac/ipp5-terraformer/tree/026bd729fd10fd4398598b9a6d99d1ccfb7b2340";
  click B_20 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-control-room"
    C0("build-static.mjs");
    C1("generate-keys.mjs");
    C2("index.mjs");
    C3("launch-backend-api.mjs");
    C4("launch-backend-batch.mjs");
    C5("launch-backend-idp.mjs");
    C6("launch-backend-static.mjs");
    C7("launch-frontend.mjs");
    C8("terraform.mjs");
    C9("index.d.ts");
  end;
  subgraph "node:crypto"
    D0(["randomUUID"]);
    D7(["webcrypto"]);
  end;
  subgraph "argv"
    D1(["Argv"]);
  end;
  subgraph "date-time"
    D2(["DateTime"]);
  end;
  subgraph "file-entry-native"
    D3(["FileEntry"]);
  end;
  subgraph "hold"
    D4(["hold"]);
    D20(["Get"]);
  end;
  subgraph "ipp5-configuration"
    D5(["Ipp5Configuration"]);
  end;
  subgraph "ipp5-static-builder"
    D6(["Ipp5StaticBuilder"]);
  end;
  subgraph "ipp5-backend-api-builder"
    D8(["Ipp5BackendApiBuilder"]);
  end;
  subgraph "ipp5-backend-api-launcher"
    D9(["Ipp5BackendApiLauncher"]);
  end;
  subgraph "ipp5-backend-batch-builder"
    D10(["Ipp5BackendBatchBuilder"]);
  end;
  subgraph "ipp5-backend-batch-launcher"
    D11(["Ipp5BackendBatchLauncher"]);
  end;
  subgraph "ipp5-backend-idp-builder"
    D12(["Ipp5BackendIdpBuilder"]);
  end;
  subgraph "ipp5-backend-idp-launcher"
    D13(["Ipp5BackendIdpLauncher"]);
  end;
  subgraph "ipp5-backend-static-builder"
    D14(["Ipp5BackendStaticBuilder"]);
  end;
  subgraph "ipp5-backend-static-launcher"
    D15(["Ipp5BackendStaticLauncher"]);
  end;
  subgraph "ipp5-frontend-builder"
    D16(["Ipp5FrontendBuilder"]);
  end;
  subgraph "ipp5-frontend-launcher"
    D17(["Ipp5FrontendLauncher"]);
  end;
  subgraph "ipp5-terraformer"
    D18(["Ipp5Terraformer"]);
  end;
  subgraph "file-entry"
    D19(["FileEntry"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D5 --import--> C0;
  D6 --import--> C0;
  D0 --import--> C1;
  D7 --import--> C1;
  D1 --import--> C1;
  D2 --import--> C1;
  D3 --import--> C1;
  D4 --import--> C1;
  D0 --import--> C3;
  D1 --import--> C3;
  D2 --import--> C3;
  D3 --import--> C3;
  D4 --import--> C3;
  D8 --import--> C3;
  D9 --import--> C3;
  D5 --import--> C3;
  D0 --import--> C4;
  D1 --import--> C4;
  D2 --import--> C4;
  D3 --import--> C4;
  D4 --import--> C4;
  D10 --import--> C4;
  D11 --import--> C4;
  D5 --import--> C4;
  D0 --import--> C5;
  D1 --import--> C5;
  D2 --import--> C5;
  D3 --import--> C5;
  D4 --import--> C5;
  D12 --import--> C5;
  D13 --import--> C5;
  D5 --import--> C5;
  D0 --import--> C6;
  D1 --import--> C6;
  D2 --import--> C6;
  D3 --import--> C6;
  D4 --import--> C6;
  D14 --import--> C6;
  D15 --import--> C6;
  D5 --import--> C6;
  D0 --import--> C7;
  D1 --import--> C7;
  D2 --import--> C7;
  D3 --import--> C7;
  D4 --import--> C7;
  D5 --import--> C7;
  D16 --import--> C7;
  D17 --import--> C7;
  D0 --import--> C8;
  D1 --import--> C8;
  D2 --import--> C8;
  D3 --import--> C8;
  D4 --import--> C8;
  D5 --import--> C8;
  D18 --import--> C8;
  D1 --import--> C9;
  D2 --import--> C9;
  D19 --import--> C9;
  D20 --import--> C9;
  D8 --import--> C9;
  D9 --import--> C9;
  D10 --import--> C9;
  D11 --import--> C9;
  D12 --import--> C9;
  D13 --import--> C9;
  D14 --import--> C9;
  D15 --import--> C9;
  D5 --import--> C9;
  D16 --import--> C9;
  D17 --import--> C9;
  D6 --import--> C9;
  D18 --import--> C9;
~~~~~
