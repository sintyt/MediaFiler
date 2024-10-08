// @generated by protoc-gen-connect-es v1.5.0 with parameter "target=ts"
// @generated from file mediafile/v2/camera.proto (package mediafile.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CameraRequest, CameraResponse, ListCameraRequest, ListCameraResponse } from "./camera_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service mediafile.v2.MediaFileService
 */
export const MediaFileService = {
  typeName: "mediafile.v2.MediaFileService",
  methods: {
    /**
     * @generated from rpc mediafile.v2.MediaFileService.Camera
     */
    camera: {
      name: "Camera",
      I: CameraRequest,
      O: CameraResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc mediafile.v2.MediaFileService.ListCamera
     */
    listCamera: {
      name: "ListCamera",
      I: ListCameraRequest,
      O: ListCameraResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

