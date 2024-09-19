import type { MetaFunction } from "@remix-run/node";

import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { MediaFileService } from "gen/mediafile/v1/camera_connect";
import { CameraRequest, CameraResponse } from "gen/mediafile/v1/camera_pb";

export const meta: MetaFunction = () => {
  return [
    { title: "MediaFiler" },
    { name: "description", content: "メディアファイルの管理アプリ" },
  ];
};

const transport = createConnectTransport({
  httpVersion: "1.1",
  baseUrl: "http://localhost:5176",
});

console.log(transport);


export default function Index() {

  const client = createPromiseClient(MediaFileService, transport);
  console.log(client);
  // const res = await client.camera({model: "shin"} as CameraRequest);
  // console.log(res)


  return (
    <div>
      <h1>メディアファイルを整理しましょう</h1>
    </div>
  );
}

