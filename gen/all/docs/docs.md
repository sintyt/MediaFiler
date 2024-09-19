# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [greet/v1/greet.proto](#greet_v1_greet-proto)
    - [SayHelloRequest](#greet-v1-SayHelloRequest)
    - [SayHelloResponse](#greet-v1-SayHelloResponse)
  
    - [GreetService](#greet-v1-GreetService)
  
- [mediafile/v1/camera.proto](#mediafile_v1_camera-proto)
    - [Camera](#mediafile-v1-Camera)
    - [CameraRequest](#mediafile-v1-CameraRequest)
    - [CameraResponse](#mediafile-v1-CameraResponse)
    - [ListCameraRequest](#mediafile-v1-ListCameraRequest)
    - [ListCameraResponse](#mediafile-v1-ListCameraResponse)
  
    - [MediaFileService](#mediafile-v1-MediaFileService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="greet_v1_greet-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## greet/v1/greet.proto



<a name="greet-v1-SayHelloRequest"></a>

### SayHelloRequest
The request message containing the user&#39;s name.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |






<a name="greet-v1-SayHelloResponse"></a>

### SayHelloResponse
The response message containing the greetings.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |





 

 

 


<a name="greet-v1-GreetService"></a>

### GreetService
The greeting service definition.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SayHello | [SayHelloRequest](#greet-v1-SayHelloRequest) | [SayHelloResponse](#greet-v1-SayHelloResponse) | Sends a greeting |

 



<a name="mediafile_v1_camera-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## mediafile/v1/camera.proto



<a name="mediafile-v1-Camera"></a>

### Camera
PhotoManager.Cameraレコードに相当するメッセージ


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| maker | [string](#string) |  |  |
| model | [string](#string) |  |  |
| label | [string](#string) |  |  |






<a name="mediafile-v1-CameraRequest"></a>

### CameraRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| model | [string](#string) |  |  |






<a name="mediafile-v1-CameraResponse"></a>

### CameraResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| camera | [Camera](#mediafile-v1-Camera) |  |  |






<a name="mediafile-v1-ListCameraRequest"></a>

### ListCameraRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| all | [string](#string) |  |  |






<a name="mediafile-v1-ListCameraResponse"></a>

### ListCameraResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cameras | [Camera](#mediafile-v1-Camera) | repeated |  |





 

 

 


<a name="mediafile-v1-MediaFileService"></a>

### MediaFileService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Camera | [CameraRequest](#mediafile-v1-CameraRequest) | [CameraResponse](#mediafile-v1-CameraResponse) |  |
| ListCamera | [ListCameraRequest](#mediafile-v1-ListCameraRequest) | [ListCameraResponse](#mediafile-v1-ListCameraResponse) |  |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

