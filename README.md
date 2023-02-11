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
  click B_0 "https://github.com/e53e04ac/argv/tree/69a48a124d20580b7bf7b32a08a5c0523f41adaf";
  click B_1 "https://github.com/e53e04ac/base/tree/b4e091dbfeba0ea30c870ac7ac7877582e3fd4f0";
  click B_2 "https://github.com/e53e04ac/date-time/tree/0aa67ba78d80875a0ff83b26e2183327890420b4";
  click B_3 "https://github.com/e53e04ac/event-emitter/tree/289e6320381f1be4d43177944eca0a12b665c4f7";
  click B_4 "https://github.com/e53e04ac/file-entry-native/tree/4bbe53dfa25202c8fb2a5865ea3b35a7eab10b07";
  click B_5 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_6 "https://github.com/e53e04ac/ipp5-backend-api-builder/tree/a61efdf4c4b2de0c969233f34d8c5969e21770d9";
  click B_7 "https://github.com/e53e04ac/ipp5-backend-api-launcher/tree/0ebba5508d662bf67bfef551245df11c56c943d6";
  click B_8 "https://github.com/e53e04ac/ipp5-backend-batch-builder/tree/394143b67164c326b6f6a209925a2a65175017f3";
  click B_9 "https://github.com/e53e04ac/ipp5-backend-batch-launcher/tree/46259a1440701730b1fc647cade78e64984ac390";
  click B_10 "https://github.com/e53e04ac/ipp5-backend-idp-builder/tree/17fe3cf42987bf0469304a141ff02835c6bdb373";
  click B_11 "https://github.com/e53e04ac/ipp5-backend-idp-launcher/tree/6fa3822cdda57f051954fef0a1573f642359ea6d";
  click B_12 "https://github.com/e53e04ac/ipp5-backend-static-builder/tree/3e11b3b49a21d736bdb2d652863b1d83e2731c14";
  click B_13 "https://github.com/e53e04ac/ipp5-backend-static-launcher/tree/fe0be4511564da45150389053c74ed71b543287f";
  click B_14 "https://github.com/e53e04ac/ipp5-configuration/tree/6dcb25815a00c4d07df4a648713acea68733e69e";
  click B_15 "https://github.com/e53e04ac/ipp5-frontend-builder/tree/f5c493a070ddf1f357eb41dc15f973067718600b";
  click B_16 "https://github.com/e53e04ac/ipp5-frontend-launcher/tree/4e08b14b69e24d6be672a5ca6df99625e2cb341a";
  click B_17 "https://github.com/e53e04ac/ipp5-static-builder/tree/09942b9690690fb495232f9dc944213af39c2f15";
  click B_18 "https://github.com/e53e04ac/ipp5-terraformer/tree/941e0bf24cdb43341a40c29abc55c2de1b0c33b9";
  click B_19 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_20 "https://github.com/e53e04ac/file-entry/tree/923119d07163b8f91b6138367a04760041225a06";
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
