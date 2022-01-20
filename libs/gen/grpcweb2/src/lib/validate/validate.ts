/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Timestamp } from '../google/protobuf/timestamp';
import { Duration } from '../google/protobuf/duration';

/**
 * FieldRules encapsulates the rules for each type of field. Depending on the
 * field, the correct set should be used to ensure proper validations.
 */
export interface FieldRules {
  message: MessageRules | undefined;
  /** Scalar Field Types */
  float: FloatRules | undefined;
  double: DoubleRules | undefined;
  int32: Int32Rules | undefined;
  int64: Int64Rules | undefined;
  uint32: UInt32Rules | undefined;
  uint64: UInt64Rules | undefined;
  sint32: SInt32Rules | undefined;
  sint64: SInt64Rules | undefined;
  fixed32: Fixed32Rules | undefined;
  fixed64: Fixed64Rules | undefined;
  sfixed32: SFixed32Rules | undefined;
  sfixed64: SFixed64Rules | undefined;
  bool: BoolRules | undefined;
  string: StringRules | undefined;
  bytes: BytesRules | undefined;
  /** Complex Field Types */
  enum: EnumRules | undefined;
  repeated: RepeatedRules | undefined;
  map: MapRules | undefined;
  /** Well-Known Field Types */
  any: AnyRules | undefined;
  duration: DurationRules | undefined;
  timestamp: TimestampRules | undefined;
}

/** FloatRules describes the constraints applied to `float` values */
export interface FloatRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** DoubleRules describes the constraints applied to `double` values */
export interface DoubleRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** Int32Rules describes the constraints applied to `int32` values */
export interface Int32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** Int64Rules describes the constraints applied to `int64` values */
export interface Int64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** UInt32Rules describes the constraints applied to `uint32` values */
export interface UInt32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** UInt64Rules describes the constraints applied to `uint64` values */
export interface UInt64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** SInt32Rules describes the constraints applied to `sint32` values */
export interface SInt32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** SInt64Rules describes the constraints applied to `sint64` values */
export interface SInt64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** Fixed32Rules describes the constraints applied to `fixed32` values */
export interface Fixed32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** Fixed64Rules describes the constraints applied to `fixed64` values */
export interface Fixed64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** SFixed32Rules describes the constraints applied to `sfixed32` values */
export interface SFixed32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** SFixed64Rules describes the constraints applied to `sfixed64` values */
export interface SFixed64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/** BoolRules describes the constraints applied to `bool` values */
export interface BoolRules {
  /** Const specifies that this field must be exactly the specified value */
  const: boolean;
}

/** StringRules describe the constraints applied to `string` values */
export interface StringRules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Len specifies that this field must be the specified number of
   * characters (Unicode code points). Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  len: number;
  /**
   * MinLen specifies that this field must be the specified number of
   * characters (Unicode code points) at a minimum. Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  minLen: number;
  /**
   * MaxLen specifies that this field must be the specified number of
   * characters (Unicode code points) at a maximum. Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  maxLen: number;
  /**
   * LenBytes specifies that this field must be the specified number of bytes
   * at a minimum
   */
  lenBytes: number;
  /**
   * MinBytes specifies that this field must be the specified number of bytes
   * at a minimum
   */
  minBytes: number;
  /**
   * MaxBytes specifies that this field must be the specified number of bytes
   * at a maximum
   */
  maxBytes: number;
  /**
   * Pattern specifes that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   */
  pattern: string;
  /**
   * Prefix specifies that this field must have the specified substring at
   * the beginning of the string.
   */
  prefix: string;
  /**
   * Suffix specifies that this field must have the specified substring at
   * the end of the string.
   */
  suffix: string;
  /**
   * Contains specifies that this field must have the specified substring
   * anywhere in the string.
   */
  contains: string;
  /**
   * NotContains specifies that this field cannot have the specified substring
   * anywhere in the string.
   */
  notContains: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: string[];
  /**
   * Email specifies that the field must be a valid email address as
   * defined by RFC 5322
   */
  email: boolean | undefined;
  /**
   * Hostname specifies that the field must be a valid hostname as
   * defined by RFC 1034. This constraint does not support
   * internationalized domain names (IDNs).
   */
  hostname: boolean | undefined;
  /**
   * Ip specifies that the field must be a valid IP (v4 or v6) address.
   * Valid IPv6 addresses should not include surrounding square brackets.
   */
  ip: boolean | undefined;
  /** Ipv4 specifies that the field must be a valid IPv4 address. */
  ipv4: boolean | undefined;
  /**
   * Ipv6 specifies that the field must be a valid IPv6 address. Valid
   * IPv6 addresses should not include surrounding square brackets.
   */
  ipv6: boolean | undefined;
  /**
   * Uri specifies that the field must be a valid, absolute URI as defined
   * by RFC 3986
   */
  uri: boolean | undefined;
  /**
   * UriRef specifies that the field must be a valid URI as defined by RFC
   * 3986 and may be relative or absolute.
   */
  uriRef: boolean | undefined;
  /**
   * Address specifies that the field must be either a valid hostname as
   * defined by RFC 1034 (which does not support internationalized domain
   * names or IDNs), or it can be a valid IP (v4 or v6).
   */
  address: boolean | undefined;
  /**
   * Uuid specifies that the field must be a valid UUID as defined by
   * RFC 4122
   */
  uuid: boolean | undefined;
}

/** BytesRules describe the constraints applied to `bytes` values */
export interface BytesRules {
  /** Const specifies that this field must be exactly the specified value */
  const: Uint8Array;
  /** Len specifies that this field must be the specified number of bytes */
  len: number;
  /**
   * MinLen specifies that this field must be the specified number of bytes
   * at a minimum
   */
  minLen: number;
  /**
   * MaxLen specifies that this field must be the specified number of bytes
   * at a maximum
   */
  maxLen: number;
  /**
   * Pattern specifes that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   */
  pattern: string;
  /**
   * Prefix specifies that this field must have the specified bytes at the
   * beginning of the string.
   */
  prefix: Uint8Array;
  /**
   * Suffix specifies that this field must have the specified bytes at the
   * end of the string.
   */
  suffix: Uint8Array;
  /**
   * Contains specifies that this field must have the specified bytes
   * anywhere in the string.
   */
  contains: Uint8Array;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Uint8Array[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: Uint8Array[];
  /**
   * Ip specifies that the field must be a valid IP (v4 or v6) address in
   * byte format
   */
  ip: boolean | undefined;
  /**
   * Ipv4 specifies that the field must be a valid IPv4 address in byte
   * format
   */
  ipv4: boolean | undefined;
  /**
   * Ipv6 specifies that the field must be a valid IPv6 address in byte
   * format
   */
  ipv6: boolean | undefined;
}

/** EnumRules describe the constraints applied to enum values */
export interface EnumRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * DefinedOnly specifies that this field must be only one of the defined
   * values for this enum, failing on any undefined value.
   */
  definedOnly: boolean;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/**
 * MessageRules describe the constraints applied to embedded message values.
 * For message-type fields, validation is performed recursively.
 */
export interface MessageRules {
  /**
   * Skip specifies that the validation rules of this field should not be
   * evaluated
   */
  skip: boolean;
  /** Required specifies that this field must be set */
  required: boolean;
}

/** RepeatedRules describe the constraints applied to `repeated` values */
export interface RepeatedRules {
  /**
   * MinItems specifies that this field must have the specified number of
   * items at a minimum
   */
  minItems: number;
  /**
   * MaxItems specifies that this field must have the specified number of
   * items at a maximum
   */
  maxItems: number;
  /**
   * Unique specifies that all elements in this field must be unique. This
   * contraint is only applicable to scalar and enum types (messages are not
   * supported).
   */
  unique: boolean;
  /**
   * Items specifies the contraints to be applied to each item in the field.
   * Repeated message fields will still execute validation against each item
   * unless skip is specified here.
   */
  items: FieldRules | undefined;
}

/** MapRules describe the constraints applied to `map` values */
export interface MapRules {
  /**
   * MinPairs specifies that this field must have the specified number of
   * KVs at a minimum
   */
  minPairs: number;
  /**
   * MaxPairs specifies that this field must have the specified number of
   * KVs at a maximum
   */
  maxPairs: number;
  /**
   * NoSparse specifies values in this field cannot be unset. This only
   * applies to map's with message value types.
   */
  noSparse: boolean;
  /** Keys specifies the constraints to be applied to each key in the field. */
  keys: FieldRules | undefined;
  /**
   * Values specifies the constraints to be applied to the value of each key
   * in the field. Message values will still have their validations evaluated
   * unless skip is specified here.
   */
  values: FieldRules | undefined;
}

/**
 * AnyRules describe constraints applied exclusively to the
 * `google.protobuf.Any` well-known type
 */
export interface AnyRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /**
   * In specifies that this field's `type_url` must be equal to one of the
   * specified values.
   */
  in: string[];
  /**
   * NotIn specifies that this field's `type_url` must not be equal to any of
   * the specified values.
   */
  notIn: string[];
}

/**
 * DurationRules describe the constraints applied exclusively to the
 * `google.protobuf.Duration` well-known type
 */
export interface DurationRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /** Const specifies that this field must be exactly the specified value */
  const: Duration | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: Duration | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * inclusive
   */
  lte: Duration | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt: Duration | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte: Duration | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Duration[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: Duration[];
}

/**
 * TimestampRules describe the constraints applied exclusively to the
 * `google.protobuf.Timestamp` well-known type
 */
export interface TimestampRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /** Const specifies that this field must be exactly the specified value */
  const: Date | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: Date | undefined;
  /**
   * Lte specifies that this field must be less than the specified value,
   * inclusive
   */
  lte: Date | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt: Date | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte: Date | undefined;
  /**
   * LtNow specifies that this must be less than the current time. LtNow
   * can only be used with the Within rule.
   */
  ltNow: boolean;
  /**
   * GtNow specifies that this must be greater than the current time. GtNow
   * can only be used with the Within rule.
   */
  gtNow: boolean;
  /**
   * Within specifies that this field must be within this duration of the
   * current time. This constraint can be used alone or with the LtNow and
   * GtNow rules.
   */
  within: Duration | undefined;
}

const baseFieldRules: object = {};

export const FieldRules = {
  encode(message: FieldRules, writer: Writer = Writer.create()): Writer {
    if (message.message !== undefined) {
      MessageRules.encode(message.message, writer.uint32(138).fork()).ldelim();
    }
    if (message.float !== undefined) {
      FloatRules.encode(message.float, writer.uint32(10).fork()).ldelim();
    }
    if (message.double !== undefined) {
      DoubleRules.encode(message.double, writer.uint32(18).fork()).ldelim();
    }
    if (message.int32 !== undefined) {
      Int32Rules.encode(message.int32, writer.uint32(26).fork()).ldelim();
    }
    if (message.int64 !== undefined) {
      Int64Rules.encode(message.int64, writer.uint32(34).fork()).ldelim();
    }
    if (message.uint32 !== undefined) {
      UInt32Rules.encode(message.uint32, writer.uint32(42).fork()).ldelim();
    }
    if (message.uint64 !== undefined) {
      UInt64Rules.encode(message.uint64, writer.uint32(50).fork()).ldelim();
    }
    if (message.sint32 !== undefined) {
      SInt32Rules.encode(message.sint32, writer.uint32(58).fork()).ldelim();
    }
    if (message.sint64 !== undefined) {
      SInt64Rules.encode(message.sint64, writer.uint32(66).fork()).ldelim();
    }
    if (message.fixed32 !== undefined) {
      Fixed32Rules.encode(message.fixed32, writer.uint32(74).fork()).ldelim();
    }
    if (message.fixed64 !== undefined) {
      Fixed64Rules.encode(message.fixed64, writer.uint32(82).fork()).ldelim();
    }
    if (message.sfixed32 !== undefined) {
      SFixed32Rules.encode(message.sfixed32, writer.uint32(90).fork()).ldelim();
    }
    if (message.sfixed64 !== undefined) {
      SFixed64Rules.encode(message.sfixed64, writer.uint32(98).fork()).ldelim();
    }
    if (message.bool !== undefined) {
      BoolRules.encode(message.bool, writer.uint32(106).fork()).ldelim();
    }
    if (message.string !== undefined) {
      StringRules.encode(message.string, writer.uint32(114).fork()).ldelim();
    }
    if (message.bytes !== undefined) {
      BytesRules.encode(message.bytes, writer.uint32(122).fork()).ldelim();
    }
    if (message.enum !== undefined) {
      EnumRules.encode(message.enum, writer.uint32(130).fork()).ldelim();
    }
    if (message.repeated !== undefined) {
      RepeatedRules.encode(message.repeated, writer.uint32(146).fork()).ldelim();
    }
    if (message.map !== undefined) {
      MapRules.encode(message.map, writer.uint32(154).fork()).ldelim();
    }
    if (message.any !== undefined) {
      AnyRules.encode(message.any, writer.uint32(162).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      DurationRules.encode(message.duration, writer.uint32(170).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      TimestampRules.encode(message.timestamp, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FieldRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFieldRules } as FieldRules;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 17:
          message.message = MessageRules.decode(reader, reader.uint32());
          break;
        case 1:
          message.float = FloatRules.decode(reader, reader.uint32());
          break;
        case 2:
          message.double = DoubleRules.decode(reader, reader.uint32());
          break;
        case 3:
          message.int32 = Int32Rules.decode(reader, reader.uint32());
          break;
        case 4:
          message.int64 = Int64Rules.decode(reader, reader.uint32());
          break;
        case 5:
          message.uint32 = UInt32Rules.decode(reader, reader.uint32());
          break;
        case 6:
          message.uint64 = UInt64Rules.decode(reader, reader.uint32());
          break;
        case 7:
          message.sint32 = SInt32Rules.decode(reader, reader.uint32());
          break;
        case 8:
          message.sint64 = SInt64Rules.decode(reader, reader.uint32());
          break;
        case 9:
          message.fixed32 = Fixed32Rules.decode(reader, reader.uint32());
          break;
        case 10:
          message.fixed64 = Fixed64Rules.decode(reader, reader.uint32());
          break;
        case 11:
          message.sfixed32 = SFixed32Rules.decode(reader, reader.uint32());
          break;
        case 12:
          message.sfixed64 = SFixed64Rules.decode(reader, reader.uint32());
          break;
        case 13:
          message.bool = BoolRules.decode(reader, reader.uint32());
          break;
        case 14:
          message.string = StringRules.decode(reader, reader.uint32());
          break;
        case 15:
          message.bytes = BytesRules.decode(reader, reader.uint32());
          break;
        case 16:
          message.enum = EnumRules.decode(reader, reader.uint32());
          break;
        case 18:
          message.repeated = RepeatedRules.decode(reader, reader.uint32());
          break;
        case 19:
          message.map = MapRules.decode(reader, reader.uint32());
          break;
        case 20:
          message.any = AnyRules.decode(reader, reader.uint32());
          break;
        case 21:
          message.duration = DurationRules.decode(reader, reader.uint32());
          break;
        case 22:
          message.timestamp = TimestampRules.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldRules {
    const message = { ...baseFieldRules } as FieldRules;
    message.message =
      object.message !== undefined && object.message !== null ? MessageRules.fromJSON(object.message) : undefined;
    message.float = object.float !== undefined && object.float !== null ? FloatRules.fromJSON(object.float) : undefined;
    message.double =
      object.double !== undefined && object.double !== null ? DoubleRules.fromJSON(object.double) : undefined;
    message.int32 = object.int32 !== undefined && object.int32 !== null ? Int32Rules.fromJSON(object.int32) : undefined;
    message.int64 = object.int64 !== undefined && object.int64 !== null ? Int64Rules.fromJSON(object.int64) : undefined;
    message.uint32 =
      object.uint32 !== undefined && object.uint32 !== null ? UInt32Rules.fromJSON(object.uint32) : undefined;
    message.uint64 =
      object.uint64 !== undefined && object.uint64 !== null ? UInt64Rules.fromJSON(object.uint64) : undefined;
    message.sint32 =
      object.sint32 !== undefined && object.sint32 !== null ? SInt32Rules.fromJSON(object.sint32) : undefined;
    message.sint64 =
      object.sint64 !== undefined && object.sint64 !== null ? SInt64Rules.fromJSON(object.sint64) : undefined;
    message.fixed32 =
      object.fixed32 !== undefined && object.fixed32 !== null ? Fixed32Rules.fromJSON(object.fixed32) : undefined;
    message.fixed64 =
      object.fixed64 !== undefined && object.fixed64 !== null ? Fixed64Rules.fromJSON(object.fixed64) : undefined;
    message.sfixed32 =
      object.sfixed32 !== undefined && object.sfixed32 !== null ? SFixed32Rules.fromJSON(object.sfixed32) : undefined;
    message.sfixed64 =
      object.sfixed64 !== undefined && object.sfixed64 !== null ? SFixed64Rules.fromJSON(object.sfixed64) : undefined;
    message.bool = object.bool !== undefined && object.bool !== null ? BoolRules.fromJSON(object.bool) : undefined;
    message.string =
      object.string !== undefined && object.string !== null ? StringRules.fromJSON(object.string) : undefined;
    message.bytes = object.bytes !== undefined && object.bytes !== null ? BytesRules.fromJSON(object.bytes) : undefined;
    message.enum = object.enum !== undefined && object.enum !== null ? EnumRules.fromJSON(object.enum) : undefined;
    message.repeated =
      object.repeated !== undefined && object.repeated !== null ? RepeatedRules.fromJSON(object.repeated) : undefined;
    message.map = object.map !== undefined && object.map !== null ? MapRules.fromJSON(object.map) : undefined;
    message.any = object.any !== undefined && object.any !== null ? AnyRules.fromJSON(object.any) : undefined;
    message.duration =
      object.duration !== undefined && object.duration !== null ? DurationRules.fromJSON(object.duration) : undefined;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? TimestampRules.fromJSON(object.timestamp)
        : undefined;
    return message;
  },

  toJSON(message: FieldRules): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message ? MessageRules.toJSON(message.message) : undefined);
    message.float !== undefined && (obj.float = message.float ? FloatRules.toJSON(message.float) : undefined);
    message.double !== undefined && (obj.double = message.double ? DoubleRules.toJSON(message.double) : undefined);
    message.int32 !== undefined && (obj.int32 = message.int32 ? Int32Rules.toJSON(message.int32) : undefined);
    message.int64 !== undefined && (obj.int64 = message.int64 ? Int64Rules.toJSON(message.int64) : undefined);
    message.uint32 !== undefined && (obj.uint32 = message.uint32 ? UInt32Rules.toJSON(message.uint32) : undefined);
    message.uint64 !== undefined && (obj.uint64 = message.uint64 ? UInt64Rules.toJSON(message.uint64) : undefined);
    message.sint32 !== undefined && (obj.sint32 = message.sint32 ? SInt32Rules.toJSON(message.sint32) : undefined);
    message.sint64 !== undefined && (obj.sint64 = message.sint64 ? SInt64Rules.toJSON(message.sint64) : undefined);
    message.fixed32 !== undefined && (obj.fixed32 = message.fixed32 ? Fixed32Rules.toJSON(message.fixed32) : undefined);
    message.fixed64 !== undefined && (obj.fixed64 = message.fixed64 ? Fixed64Rules.toJSON(message.fixed64) : undefined);
    message.sfixed32 !== undefined &&
      (obj.sfixed32 = message.sfixed32 ? SFixed32Rules.toJSON(message.sfixed32) : undefined);
    message.sfixed64 !== undefined &&
      (obj.sfixed64 = message.sfixed64 ? SFixed64Rules.toJSON(message.sfixed64) : undefined);
    message.bool !== undefined && (obj.bool = message.bool ? BoolRules.toJSON(message.bool) : undefined);
    message.string !== undefined && (obj.string = message.string ? StringRules.toJSON(message.string) : undefined);
    message.bytes !== undefined && (obj.bytes = message.bytes ? BytesRules.toJSON(message.bytes) : undefined);
    message.enum !== undefined && (obj.enum = message.enum ? EnumRules.toJSON(message.enum) : undefined);
    message.repeated !== undefined &&
      (obj.repeated = message.repeated ? RepeatedRules.toJSON(message.repeated) : undefined);
    message.map !== undefined && (obj.map = message.map ? MapRules.toJSON(message.map) : undefined);
    message.any !== undefined && (obj.any = message.any ? AnyRules.toJSON(message.any) : undefined);
    message.duration !== undefined &&
      (obj.duration = message.duration ? DurationRules.toJSON(message.duration) : undefined);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp ? TimestampRules.toJSON(message.timestamp) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FieldRules>): FieldRules {
    const message = { ...baseFieldRules } as FieldRules;
    message.message =
      object.message !== undefined && object.message !== null ? MessageRules.fromPartial(object.message) : undefined;
    message.float =
      object.float !== undefined && object.float !== null ? FloatRules.fromPartial(object.float) : undefined;
    message.double =
      object.double !== undefined && object.double !== null ? DoubleRules.fromPartial(object.double) : undefined;
    message.int32 =
      object.int32 !== undefined && object.int32 !== null ? Int32Rules.fromPartial(object.int32) : undefined;
    message.int64 =
      object.int64 !== undefined && object.int64 !== null ? Int64Rules.fromPartial(object.int64) : undefined;
    message.uint32 =
      object.uint32 !== undefined && object.uint32 !== null ? UInt32Rules.fromPartial(object.uint32) : undefined;
    message.uint64 =
      object.uint64 !== undefined && object.uint64 !== null ? UInt64Rules.fromPartial(object.uint64) : undefined;
    message.sint32 =
      object.sint32 !== undefined && object.sint32 !== null ? SInt32Rules.fromPartial(object.sint32) : undefined;
    message.sint64 =
      object.sint64 !== undefined && object.sint64 !== null ? SInt64Rules.fromPartial(object.sint64) : undefined;
    message.fixed32 =
      object.fixed32 !== undefined && object.fixed32 !== null ? Fixed32Rules.fromPartial(object.fixed32) : undefined;
    message.fixed64 =
      object.fixed64 !== undefined && object.fixed64 !== null ? Fixed64Rules.fromPartial(object.fixed64) : undefined;
    message.sfixed32 =
      object.sfixed32 !== undefined && object.sfixed32 !== null
        ? SFixed32Rules.fromPartial(object.sfixed32)
        : undefined;
    message.sfixed64 =
      object.sfixed64 !== undefined && object.sfixed64 !== null
        ? SFixed64Rules.fromPartial(object.sfixed64)
        : undefined;
    message.bool = object.bool !== undefined && object.bool !== null ? BoolRules.fromPartial(object.bool) : undefined;
    message.string =
      object.string !== undefined && object.string !== null ? StringRules.fromPartial(object.string) : undefined;
    message.bytes =
      object.bytes !== undefined && object.bytes !== null ? BytesRules.fromPartial(object.bytes) : undefined;
    message.enum = object.enum !== undefined && object.enum !== null ? EnumRules.fromPartial(object.enum) : undefined;
    message.repeated =
      object.repeated !== undefined && object.repeated !== null
        ? RepeatedRules.fromPartial(object.repeated)
        : undefined;
    message.map = object.map !== undefined && object.map !== null ? MapRules.fromPartial(object.map) : undefined;
    message.any = object.any !== undefined && object.any !== null ? AnyRules.fromPartial(object.any) : undefined;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? DurationRules.fromPartial(object.duration)
        : undefined;
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? TimestampRules.fromPartial(object.timestamp)
        : undefined;
    return message;
  },
};

const baseFloatRules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const FloatRules = {
  encode(message: FloatRules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(13).float(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(21).float(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(29).float(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(37).float(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(45).float(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.float(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FloatRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFloatRules } as FloatRules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.float();
          break;
        case 2:
          message.lt = reader.float();
          break;
        case 3:
          message.lte = reader.float();
          break;
        case 4:
          message.gt = reader.float();
          break;
        case 5:
          message.gte = reader.float();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.float());
            }
          } else {
            message.in.push(reader.float());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.float());
            }
          } else {
            message.notIn.push(reader.float());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FloatRules {
    const message = { ...baseFloatRules } as FloatRules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: FloatRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FloatRules>): FloatRules {
    const message = { ...baseFloatRules } as FloatRules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseDoubleRules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const DoubleRules = {
  encode(message: DoubleRules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(9).double(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(17).double(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(25).double(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(33).double(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(41).double(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.double(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DoubleRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDoubleRules } as DoubleRules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.double();
          break;
        case 2:
          message.lt = reader.double();
          break;
        case 3:
          message.lte = reader.double();
          break;
        case 4:
          message.gt = reader.double();
          break;
        case 5:
          message.gte = reader.double();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.double());
            }
          } else {
            message.in.push(reader.double());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.double());
            }
          } else {
            message.notIn.push(reader.double());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DoubleRules {
    const message = { ...baseDoubleRules } as DoubleRules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: DoubleRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DoubleRules>): DoubleRules {
    const message = { ...baseDoubleRules } as DoubleRules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseInt32Rules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const Int32Rules = {
  encode(message: Int32Rules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(8).int32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).int32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).int32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).int32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).int32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Int32Rules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInt32Rules } as Int32Rules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.int32();
          break;
        case 2:
          message.lt = reader.int32();
          break;
        case 3:
          message.lte = reader.int32();
          break;
        case 4:
          message.gt = reader.int32();
          break;
        case 5:
          message.gte = reader.int32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.int32());
            }
          } else {
            message.in.push(reader.int32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.int32());
            }
          } else {
            message.notIn.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Int32Rules {
    const message = { ...baseInt32Rules } as Int32Rules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: Int32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Int32Rules>): Int32Rules {
    const message = { ...baseInt32Rules } as Int32Rules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseInt64Rules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const Int64Rules = {
  encode(message: Int64Rules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(8).int64(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).int64(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).int64(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).int64(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).int64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Int64Rules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInt64Rules } as Int64Rules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.lt = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.lte = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.gt = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.gte = longToNumber(reader.int64() as Long);
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.in.push(longToNumber(reader.int64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.notIn.push(longToNumber(reader.int64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Int64Rules {
    const message = { ...baseInt64Rules } as Int64Rules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: Int64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Int64Rules>): Int64Rules {
    const message = { ...baseInt64Rules } as Int64Rules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseUInt32Rules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const UInt32Rules = {
  encode(message: UInt32Rules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(8).uint32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).uint32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).uint32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).uint32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).uint32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UInt32Rules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUInt32Rules } as UInt32Rules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.uint32();
          break;
        case 2:
          message.lt = reader.uint32();
          break;
        case 3:
          message.lte = reader.uint32();
          break;
        case 4:
          message.gt = reader.uint32();
          break;
        case 5:
          message.gte = reader.uint32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.uint32());
            }
          } else {
            message.in.push(reader.uint32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.uint32());
            }
          } else {
            message.notIn.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UInt32Rules {
    const message = { ...baseUInt32Rules } as UInt32Rules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: UInt32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UInt32Rules>): UInt32Rules {
    const message = { ...baseUInt32Rules } as UInt32Rules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseUInt64Rules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const UInt64Rules = {
  encode(message: UInt64Rules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(8).uint64(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).uint64(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).uint64(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).uint64(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).uint64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UInt64Rules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUInt64Rules } as UInt64Rules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.lt = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.lte = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.gt = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.gte = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.in.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.notIn.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UInt64Rules {
    const message = { ...baseUInt64Rules } as UInt64Rules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: UInt64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UInt64Rules>): UInt64Rules {
    const message = { ...baseUInt64Rules } as UInt64Rules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseSInt32Rules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const SInt32Rules = {
  encode(message: SInt32Rules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(8).sint32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).sint32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).sint32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).sint32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).sint32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SInt32Rules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSInt32Rules } as SInt32Rules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.sint32();
          break;
        case 2:
          message.lt = reader.sint32();
          break;
        case 3:
          message.lte = reader.sint32();
          break;
        case 4:
          message.gt = reader.sint32();
          break;
        case 5:
          message.gte = reader.sint32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sint32());
            }
          } else {
            message.in.push(reader.sint32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.sint32());
            }
          } else {
            message.notIn.push(reader.sint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SInt32Rules {
    const message = { ...baseSInt32Rules } as SInt32Rules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: SInt32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SInt32Rules>): SInt32Rules {
    const message = { ...baseSInt32Rules } as SInt32Rules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseSInt64Rules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const SInt64Rules = {
  encode(message: SInt64Rules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(8).sint64(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).sint64(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).sint64(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).sint64(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).sint64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SInt64Rules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSInt64Rules } as SInt64Rules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = longToNumber(reader.sint64() as Long);
          break;
        case 2:
          message.lt = longToNumber(reader.sint64() as Long);
          break;
        case 3:
          message.lte = longToNumber(reader.sint64() as Long);
          break;
        case 4:
          message.gt = longToNumber(reader.sint64() as Long);
          break;
        case 5:
          message.gte = longToNumber(reader.sint64() as Long);
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToNumber(reader.sint64() as Long));
            }
          } else {
            message.in.push(longToNumber(reader.sint64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToNumber(reader.sint64() as Long));
            }
          } else {
            message.notIn.push(longToNumber(reader.sint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SInt64Rules {
    const message = { ...baseSInt64Rules } as SInt64Rules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: SInt64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SInt64Rules>): SInt64Rules {
    const message = { ...baseSInt64Rules } as SInt64Rules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseFixed32Rules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const Fixed32Rules = {
  encode(message: Fixed32Rules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(13).fixed32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(21).fixed32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(29).fixed32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(37).fixed32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(45).fixed32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.fixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Fixed32Rules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFixed32Rules } as Fixed32Rules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.fixed32();
          break;
        case 2:
          message.lt = reader.fixed32();
          break;
        case 3:
          message.lte = reader.fixed32();
          break;
        case 4:
          message.gt = reader.fixed32();
          break;
        case 5:
          message.gte = reader.fixed32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.fixed32());
            }
          } else {
            message.in.push(reader.fixed32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.fixed32());
            }
          } else {
            message.notIn.push(reader.fixed32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fixed32Rules {
    const message = { ...baseFixed32Rules } as Fixed32Rules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: Fixed32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Fixed32Rules>): Fixed32Rules {
    const message = { ...baseFixed32Rules } as Fixed32Rules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseFixed64Rules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const Fixed64Rules = {
  encode(message: Fixed64Rules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(9).fixed64(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(17).fixed64(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(25).fixed64(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(33).fixed64(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(41).fixed64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.fixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Fixed64Rules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFixed64Rules } as Fixed64Rules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = longToNumber(reader.fixed64() as Long);
          break;
        case 2:
          message.lt = longToNumber(reader.fixed64() as Long);
          break;
        case 3:
          message.lte = longToNumber(reader.fixed64() as Long);
          break;
        case 4:
          message.gt = longToNumber(reader.fixed64() as Long);
          break;
        case 5:
          message.gte = longToNumber(reader.fixed64() as Long);
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.in.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToNumber(reader.fixed64() as Long));
            }
          } else {
            message.notIn.push(longToNumber(reader.fixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fixed64Rules {
    const message = { ...baseFixed64Rules } as Fixed64Rules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: Fixed64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Fixed64Rules>): Fixed64Rules {
    const message = { ...baseFixed64Rules } as Fixed64Rules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseSFixed32Rules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const SFixed32Rules = {
  encode(message: SFixed32Rules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(13).sfixed32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(21).sfixed32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(29).sfixed32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(37).sfixed32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(45).sfixed32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SFixed32Rules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSFixed32Rules } as SFixed32Rules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.sfixed32();
          break;
        case 2:
          message.lt = reader.sfixed32();
          break;
        case 3:
          message.lte = reader.sfixed32();
          break;
        case 4:
          message.gt = reader.sfixed32();
          break;
        case 5:
          message.gte = reader.sfixed32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sfixed32());
            }
          } else {
            message.in.push(reader.sfixed32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.sfixed32());
            }
          } else {
            message.notIn.push(reader.sfixed32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SFixed32Rules {
    const message = { ...baseSFixed32Rules } as SFixed32Rules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: SFixed32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SFixed32Rules>): SFixed32Rules {
    const message = { ...baseSFixed32Rules } as SFixed32Rules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseSFixed64Rules: object = { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: 0, notIn: 0 };

export const SFixed64Rules = {
  encode(message: SFixed64Rules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(9).sfixed64(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(17).sfixed64(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(25).sfixed64(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(33).sfixed64(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(41).sfixed64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SFixed64Rules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSFixed64Rules } as SFixed64Rules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = longToNumber(reader.sfixed64() as Long);
          break;
        case 2:
          message.lt = longToNumber(reader.sfixed64() as Long);
          break;
        case 3:
          message.lte = longToNumber(reader.sfixed64() as Long);
          break;
        case 4:
          message.gt = longToNumber(reader.sfixed64() as Long);
          break;
        case 5:
          message.gte = longToNumber(reader.sfixed64() as Long);
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(longToNumber(reader.sfixed64() as Long));
            }
          } else {
            message.in.push(longToNumber(reader.sfixed64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(longToNumber(reader.sfixed64() as Long));
            }
          } else {
            message.notIn.push(longToNumber(reader.sfixed64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SFixed64Rules {
    const message = { ...baseSFixed64Rules } as SFixed64Rules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.lt = object.lt !== undefined && object.lt !== null ? Number(object.lt) : 0;
    message.lte = object.lte !== undefined && object.lte !== null ? Number(object.lte) : 0;
    message.gt = object.gt !== undefined && object.gt !== null ? Number(object.gt) : 0;
    message.gte = object.gte !== undefined && object.gte !== null ? Number(object.gte) : 0;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: SFixed64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SFixed64Rules>): SFixed64Rules {
    const message = { ...baseSFixed64Rules } as SFixed64Rules;
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseBoolRules: object = { const: false };

export const BoolRules = {
  encode(message: BoolRules, writer: Writer = Writer.create()): Writer {
    if (message.const === true) {
      writer.uint32(8).bool(message.const);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BoolRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBoolRules } as BoolRules;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BoolRules {
    const message = { ...baseBoolRules } as BoolRules;
    message.const = object.const !== undefined && object.const !== null ? Boolean(object.const) : false;
    return message;
  },

  toJSON(message: BoolRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    return obj;
  },

  fromPartial(object: DeepPartial<BoolRules>): BoolRules {
    const message = { ...baseBoolRules } as BoolRules;
    message.const = object.const ?? false;
    return message;
  },
};

const baseStringRules: object = {
  const: '',
  len: 0,
  minLen: 0,
  maxLen: 0,
  lenBytes: 0,
  minBytes: 0,
  maxBytes: 0,
  pattern: '',
  prefix: '',
  suffix: '',
  contains: '',
  notContains: '',
  in: '',
  notIn: '',
};

export const StringRules = {
  encode(message: StringRules, writer: Writer = Writer.create()): Writer {
    if (message.const !== '') {
      writer.uint32(10).string(message.const);
    }
    if (message.len !== 0) {
      writer.uint32(152).uint64(message.len);
    }
    if (message.minLen !== 0) {
      writer.uint32(16).uint64(message.minLen);
    }
    if (message.maxLen !== 0) {
      writer.uint32(24).uint64(message.maxLen);
    }
    if (message.lenBytes !== 0) {
      writer.uint32(160).uint64(message.lenBytes);
    }
    if (message.minBytes !== 0) {
      writer.uint32(32).uint64(message.minBytes);
    }
    if (message.maxBytes !== 0) {
      writer.uint32(40).uint64(message.maxBytes);
    }
    if (message.pattern !== '') {
      writer.uint32(50).string(message.pattern);
    }
    if (message.prefix !== '') {
      writer.uint32(58).string(message.prefix);
    }
    if (message.suffix !== '') {
      writer.uint32(66).string(message.suffix);
    }
    if (message.contains !== '') {
      writer.uint32(74).string(message.contains);
    }
    if (message.notContains !== '') {
      writer.uint32(186).string(message.notContains);
    }
    for (const v of message.in) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.notIn) {
      writer.uint32(90).string(v!);
    }
    if (message.email !== undefined) {
      writer.uint32(96).bool(message.email);
    }
    if (message.hostname !== undefined) {
      writer.uint32(104).bool(message.hostname);
    }
    if (message.ip !== undefined) {
      writer.uint32(112).bool(message.ip);
    }
    if (message.ipv4 !== undefined) {
      writer.uint32(120).bool(message.ipv4);
    }
    if (message.ipv6 !== undefined) {
      writer.uint32(128).bool(message.ipv6);
    }
    if (message.uri !== undefined) {
      writer.uint32(136).bool(message.uri);
    }
    if (message.uriRef !== undefined) {
      writer.uint32(144).bool(message.uriRef);
    }
    if (message.address !== undefined) {
      writer.uint32(168).bool(message.address);
    }
    if (message.uuid !== undefined) {
      writer.uint32(176).bool(message.uuid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StringRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStringRules } as StringRules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.string();
          break;
        case 19:
          message.len = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.minLen = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.maxLen = longToNumber(reader.uint64() as Long);
          break;
        case 20:
          message.lenBytes = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.minBytes = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.maxBytes = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.pattern = reader.string();
          break;
        case 7:
          message.prefix = reader.string();
          break;
        case 8:
          message.suffix = reader.string();
          break;
        case 9:
          message.contains = reader.string();
          break;
        case 23:
          message.notContains = reader.string();
          break;
        case 10:
          message.in.push(reader.string());
          break;
        case 11:
          message.notIn.push(reader.string());
          break;
        case 12:
          message.email = reader.bool();
          break;
        case 13:
          message.hostname = reader.bool();
          break;
        case 14:
          message.ip = reader.bool();
          break;
        case 15:
          message.ipv4 = reader.bool();
          break;
        case 16:
          message.ipv6 = reader.bool();
          break;
        case 17:
          message.uri = reader.bool();
          break;
        case 18:
          message.uriRef = reader.bool();
          break;
        case 21:
          message.address = reader.bool();
          break;
        case 22:
          message.uuid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StringRules {
    const message = { ...baseStringRules } as StringRules;
    message.const = object.const !== undefined && object.const !== null ? String(object.const) : '';
    message.len = object.len !== undefined && object.len !== null ? Number(object.len) : 0;
    message.minLen = object.minLen !== undefined && object.minLen !== null ? Number(object.minLen) : 0;
    message.maxLen = object.maxLen !== undefined && object.maxLen !== null ? Number(object.maxLen) : 0;
    message.lenBytes = object.lenBytes !== undefined && object.lenBytes !== null ? Number(object.lenBytes) : 0;
    message.minBytes = object.minBytes !== undefined && object.minBytes !== null ? Number(object.minBytes) : 0;
    message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? Number(object.maxBytes) : 0;
    message.pattern = object.pattern !== undefined && object.pattern !== null ? String(object.pattern) : '';
    message.prefix = object.prefix !== undefined && object.prefix !== null ? String(object.prefix) : '';
    message.suffix = object.suffix !== undefined && object.suffix !== null ? String(object.suffix) : '';
    message.contains = object.contains !== undefined && object.contains !== null ? String(object.contains) : '';
    message.notContains =
      object.notContains !== undefined && object.notContains !== null ? String(object.notContains) : '';
    message.in = (object.in ?? []).map((e: any) => String(e));
    message.notIn = (object.notIn ?? []).map((e: any) => String(e));
    message.email = object.email !== undefined && object.email !== null ? Boolean(object.email) : undefined;
    message.hostname = object.hostname !== undefined && object.hostname !== null ? Boolean(object.hostname) : undefined;
    message.ip = object.ip !== undefined && object.ip !== null ? Boolean(object.ip) : undefined;
    message.ipv4 = object.ipv4 !== undefined && object.ipv4 !== null ? Boolean(object.ipv4) : undefined;
    message.ipv6 = object.ipv6 !== undefined && object.ipv6 !== null ? Boolean(object.ipv6) : undefined;
    message.uri = object.uri !== undefined && object.uri !== null ? Boolean(object.uri) : undefined;
    message.uriRef = object.uriRef !== undefined && object.uriRef !== null ? Boolean(object.uriRef) : undefined;
    message.address = object.address !== undefined && object.address !== null ? Boolean(object.address) : undefined;
    message.uuid = object.uuid !== undefined && object.uuid !== null ? Boolean(object.uuid) : undefined;
    return message;
  },

  toJSON(message: StringRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.len !== undefined && (obj.len = message.len);
    message.minLen !== undefined && (obj.minLen = message.minLen);
    message.maxLen !== undefined && (obj.maxLen = message.maxLen);
    message.lenBytes !== undefined && (obj.lenBytes = message.lenBytes);
    message.minBytes !== undefined && (obj.minBytes = message.minBytes);
    message.maxBytes !== undefined && (obj.maxBytes = message.maxBytes);
    message.pattern !== undefined && (obj.pattern = message.pattern);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.suffix !== undefined && (obj.suffix = message.suffix);
    message.contains !== undefined && (obj.contains = message.contains);
    message.notContains !== undefined && (obj.notContains = message.notContains);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.email !== undefined && (obj.email = message.email);
    message.hostname !== undefined && (obj.hostname = message.hostname);
    message.ip !== undefined && (obj.ip = message.ip);
    message.ipv4 !== undefined && (obj.ipv4 = message.ipv4);
    message.ipv6 !== undefined && (obj.ipv6 = message.ipv6);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriRef !== undefined && (obj.uriRef = message.uriRef);
    message.address !== undefined && (obj.address = message.address);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial(object: DeepPartial<StringRules>): StringRules {
    const message = { ...baseStringRules } as StringRules;
    message.const = object.const ?? '';
    message.len = object.len ?? 0;
    message.minLen = object.minLen ?? 0;
    message.maxLen = object.maxLen ?? 0;
    message.lenBytes = object.lenBytes ?? 0;
    message.minBytes = object.minBytes ?? 0;
    message.maxBytes = object.maxBytes ?? 0;
    message.pattern = object.pattern ?? '';
    message.prefix = object.prefix ?? '';
    message.suffix = object.suffix ?? '';
    message.contains = object.contains ?? '';
    message.notContains = object.notContains ?? '';
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    message.email = object.email ?? undefined;
    message.hostname = object.hostname ?? undefined;
    message.ip = object.ip ?? undefined;
    message.ipv4 = object.ipv4 ?? undefined;
    message.ipv6 = object.ipv6 ?? undefined;
    message.uri = object.uri ?? undefined;
    message.uriRef = object.uriRef ?? undefined;
    message.address = object.address ?? undefined;
    message.uuid = object.uuid ?? undefined;
    return message;
  },
};

const baseBytesRules: object = { len: 0, minLen: 0, maxLen: 0, pattern: '' };

export const BytesRules = {
  encode(message: BytesRules, writer: Writer = Writer.create()): Writer {
    if (message.const.length !== 0) {
      writer.uint32(10).bytes(message.const);
    }
    if (message.len !== 0) {
      writer.uint32(104).uint64(message.len);
    }
    if (message.minLen !== 0) {
      writer.uint32(16).uint64(message.minLen);
    }
    if (message.maxLen !== 0) {
      writer.uint32(24).uint64(message.maxLen);
    }
    if (message.pattern !== '') {
      writer.uint32(34).string(message.pattern);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }
    if (message.suffix.length !== 0) {
      writer.uint32(50).bytes(message.suffix);
    }
    if (message.contains.length !== 0) {
      writer.uint32(58).bytes(message.contains);
    }
    for (const v of message.in) {
      writer.uint32(66).bytes(v!);
    }
    for (const v of message.notIn) {
      writer.uint32(74).bytes(v!);
    }
    if (message.ip !== undefined) {
      writer.uint32(80).bool(message.ip);
    }
    if (message.ipv4 !== undefined) {
      writer.uint32(88).bool(message.ipv4);
    }
    if (message.ipv6 !== undefined) {
      writer.uint32(96).bool(message.ipv6);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BytesRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBytesRules } as BytesRules;
    message.in = [];
    message.notIn = [];
    message.const = new Uint8Array();
    message.prefix = new Uint8Array();
    message.suffix = new Uint8Array();
    message.contains = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.bytes();
          break;
        case 13:
          message.len = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.minLen = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.maxLen = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.pattern = reader.string();
          break;
        case 5:
          message.prefix = reader.bytes();
          break;
        case 6:
          message.suffix = reader.bytes();
          break;
        case 7:
          message.contains = reader.bytes();
          break;
        case 8:
          message.in.push(reader.bytes());
          break;
        case 9:
          message.notIn.push(reader.bytes());
          break;
        case 10:
          message.ip = reader.bool();
          break;
        case 11:
          message.ipv4 = reader.bool();
          break;
        case 12:
          message.ipv6 = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BytesRules {
    const message = { ...baseBytesRules } as BytesRules;
    message.const =
      object.const !== undefined && object.const !== null ? bytesFromBase64(object.const) : new Uint8Array();
    message.len = object.len !== undefined && object.len !== null ? Number(object.len) : 0;
    message.minLen = object.minLen !== undefined && object.minLen !== null ? Number(object.minLen) : 0;
    message.maxLen = object.maxLen !== undefined && object.maxLen !== null ? Number(object.maxLen) : 0;
    message.pattern = object.pattern !== undefined && object.pattern !== null ? String(object.pattern) : '';
    message.prefix =
      object.prefix !== undefined && object.prefix !== null ? bytesFromBase64(object.prefix) : new Uint8Array();
    message.suffix =
      object.suffix !== undefined && object.suffix !== null ? bytesFromBase64(object.suffix) : new Uint8Array();
    message.contains =
      object.contains !== undefined && object.contains !== null ? bytesFromBase64(object.contains) : new Uint8Array();
    message.in = (object.in ?? []).map((e: any) => bytesFromBase64(e));
    message.notIn = (object.notIn ?? []).map((e: any) => bytesFromBase64(e));
    message.ip = object.ip !== undefined && object.ip !== null ? Boolean(object.ip) : undefined;
    message.ipv4 = object.ipv4 !== undefined && object.ipv4 !== null ? Boolean(object.ipv4) : undefined;
    message.ipv6 = object.ipv6 !== undefined && object.ipv6 !== null ? Boolean(object.ipv6) : undefined;
    return message;
  },

  toJSON(message: BytesRules): unknown {
    const obj: any = {};
    message.const !== undefined &&
      (obj.const = base64FromBytes(message.const !== undefined ? message.const : new Uint8Array()));
    message.len !== undefined && (obj.len = message.len);
    message.minLen !== undefined && (obj.minLen = message.minLen);
    message.maxLen !== undefined && (obj.maxLen = message.maxLen);
    message.pattern !== undefined && (obj.pattern = message.pattern);
    message.prefix !== undefined &&
      (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    message.suffix !== undefined &&
      (obj.suffix = base64FromBytes(message.suffix !== undefined ? message.suffix : new Uint8Array()));
    message.contains !== undefined &&
      (obj.contains = base64FromBytes(message.contains !== undefined ? message.contains : new Uint8Array()));
    if (message.in) {
      obj.in = message.in.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.notIn = [];
    }
    message.ip !== undefined && (obj.ip = message.ip);
    message.ipv4 !== undefined && (obj.ipv4 = message.ipv4);
    message.ipv6 !== undefined && (obj.ipv6 = message.ipv6);
    return obj;
  },

  fromPartial(object: DeepPartial<BytesRules>): BytesRules {
    const message = { ...baseBytesRules } as BytesRules;
    message.const = object.const ?? new Uint8Array();
    message.len = object.len ?? 0;
    message.minLen = object.minLen ?? 0;
    message.maxLen = object.maxLen ?? 0;
    message.pattern = object.pattern ?? '';
    message.prefix = object.prefix ?? new Uint8Array();
    message.suffix = object.suffix ?? new Uint8Array();
    message.contains = object.contains ?? new Uint8Array();
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    message.ip = object.ip ?? undefined;
    message.ipv4 = object.ipv4 ?? undefined;
    message.ipv6 = object.ipv6 ?? undefined;
    return message;
  },
};

const baseEnumRules: object = { const: 0, definedOnly: false, in: 0, notIn: 0 };

export const EnumRules = {
  encode(message: EnumRules, writer: Writer = Writer.create()): Writer {
    if (message.const !== 0) {
      writer.uint32(8).int32(message.const);
    }
    if (message.definedOnly === true) {
      writer.uint32(16).bool(message.definedOnly);
    }
    writer.uint32(26).fork();
    for (const v of message.in) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.notIn) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EnumRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnumRules } as EnumRules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.int32();
          break;
        case 2:
          message.definedOnly = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.int32());
            }
          } else {
            message.in.push(reader.int32());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.int32());
            }
          } else {
            message.notIn.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnumRules {
    const message = { ...baseEnumRules } as EnumRules;
    message.const = object.const !== undefined && object.const !== null ? Number(object.const) : 0;
    message.definedOnly =
      object.definedOnly !== undefined && object.definedOnly !== null ? Boolean(object.definedOnly) : false;
    message.in = (object.in ?? []).map((e: any) => Number(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: EnumRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.definedOnly !== undefined && (obj.definedOnly = message.definedOnly);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EnumRules>): EnumRules {
    const message = { ...baseEnumRules } as EnumRules;
    message.const = object.const ?? 0;
    message.definedOnly = object.definedOnly ?? false;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseMessageRules: object = { skip: false, required: false };

export const MessageRules = {
  encode(message: MessageRules, writer: Writer = Writer.create()): Writer {
    if (message.skip === true) {
      writer.uint32(8).bool(message.skip);
    }
    if (message.required === true) {
      writer.uint32(16).bool(message.required);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MessageRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessageRules } as MessageRules;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skip = reader.bool();
          break;
        case 2:
          message.required = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageRules {
    const message = { ...baseMessageRules } as MessageRules;
    message.skip = object.skip !== undefined && object.skip !== null ? Boolean(object.skip) : false;
    message.required = object.required !== undefined && object.required !== null ? Boolean(object.required) : false;
    return message;
  },

  toJSON(message: MessageRules): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = message.skip);
    message.required !== undefined && (obj.required = message.required);
    return obj;
  },

  fromPartial(object: DeepPartial<MessageRules>): MessageRules {
    const message = { ...baseMessageRules } as MessageRules;
    message.skip = object.skip ?? false;
    message.required = object.required ?? false;
    return message;
  },
};

const baseRepeatedRules: object = { minItems: 0, maxItems: 0, unique: false };

export const RepeatedRules = {
  encode(message: RepeatedRules, writer: Writer = Writer.create()): Writer {
    if (message.minItems !== 0) {
      writer.uint32(8).uint64(message.minItems);
    }
    if (message.maxItems !== 0) {
      writer.uint32(16).uint64(message.maxItems);
    }
    if (message.unique === true) {
      writer.uint32(24).bool(message.unique);
    }
    if (message.items !== undefined) {
      FieldRules.encode(message.items, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RepeatedRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRepeatedRules } as RepeatedRules;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minItems = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.maxItems = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.unique = reader.bool();
          break;
        case 4:
          message.items = FieldRules.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RepeatedRules {
    const message = { ...baseRepeatedRules } as RepeatedRules;
    message.minItems = object.minItems !== undefined && object.minItems !== null ? Number(object.minItems) : 0;
    message.maxItems = object.maxItems !== undefined && object.maxItems !== null ? Number(object.maxItems) : 0;
    message.unique = object.unique !== undefined && object.unique !== null ? Boolean(object.unique) : false;
    message.items = object.items !== undefined && object.items !== null ? FieldRules.fromJSON(object.items) : undefined;
    return message;
  },

  toJSON(message: RepeatedRules): unknown {
    const obj: any = {};
    message.minItems !== undefined && (obj.minItems = message.minItems);
    message.maxItems !== undefined && (obj.maxItems = message.maxItems);
    message.unique !== undefined && (obj.unique = message.unique);
    message.items !== undefined && (obj.items = message.items ? FieldRules.toJSON(message.items) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RepeatedRules>): RepeatedRules {
    const message = { ...baseRepeatedRules } as RepeatedRules;
    message.minItems = object.minItems ?? 0;
    message.maxItems = object.maxItems ?? 0;
    message.unique = object.unique ?? false;
    message.items =
      object.items !== undefined && object.items !== null ? FieldRules.fromPartial(object.items) : undefined;
    return message;
  },
};

const baseMapRules: object = { minPairs: 0, maxPairs: 0, noSparse: false };

export const MapRules = {
  encode(message: MapRules, writer: Writer = Writer.create()): Writer {
    if (message.minPairs !== 0) {
      writer.uint32(8).uint64(message.minPairs);
    }
    if (message.maxPairs !== 0) {
      writer.uint32(16).uint64(message.maxPairs);
    }
    if (message.noSparse === true) {
      writer.uint32(24).bool(message.noSparse);
    }
    if (message.keys !== undefined) {
      FieldRules.encode(message.keys, writer.uint32(34).fork()).ldelim();
    }
    if (message.values !== undefined) {
      FieldRules.encode(message.values, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MapRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMapRules } as MapRules;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minPairs = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.maxPairs = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.noSparse = reader.bool();
          break;
        case 4:
          message.keys = FieldRules.decode(reader, reader.uint32());
          break;
        case 5:
          message.values = FieldRules.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapRules {
    const message = { ...baseMapRules } as MapRules;
    message.minPairs = object.minPairs !== undefined && object.minPairs !== null ? Number(object.minPairs) : 0;
    message.maxPairs = object.maxPairs !== undefined && object.maxPairs !== null ? Number(object.maxPairs) : 0;
    message.noSparse = object.noSparse !== undefined && object.noSparse !== null ? Boolean(object.noSparse) : false;
    message.keys = object.keys !== undefined && object.keys !== null ? FieldRules.fromJSON(object.keys) : undefined;
    message.values =
      object.values !== undefined && object.values !== null ? FieldRules.fromJSON(object.values) : undefined;
    return message;
  },

  toJSON(message: MapRules): unknown {
    const obj: any = {};
    message.minPairs !== undefined && (obj.minPairs = message.minPairs);
    message.maxPairs !== undefined && (obj.maxPairs = message.maxPairs);
    message.noSparse !== undefined && (obj.noSparse = message.noSparse);
    message.keys !== undefined && (obj.keys = message.keys ? FieldRules.toJSON(message.keys) : undefined);
    message.values !== undefined && (obj.values = message.values ? FieldRules.toJSON(message.values) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MapRules>): MapRules {
    const message = { ...baseMapRules } as MapRules;
    message.minPairs = object.minPairs ?? 0;
    message.maxPairs = object.maxPairs ?? 0;
    message.noSparse = object.noSparse ?? false;
    message.keys = object.keys !== undefined && object.keys !== null ? FieldRules.fromPartial(object.keys) : undefined;
    message.values =
      object.values !== undefined && object.values !== null ? FieldRules.fromPartial(object.values) : undefined;
    return message;
  },
};

const baseAnyRules: object = { required: false, in: '', notIn: '' };

export const AnyRules = {
  encode(message: AnyRules, writer: Writer = Writer.create()): Writer {
    if (message.required === true) {
      writer.uint32(8).bool(message.required);
    }
    for (const v of message.in) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.notIn) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AnyRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAnyRules } as AnyRules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.required = reader.bool();
          break;
        case 2:
          message.in.push(reader.string());
          break;
        case 3:
          message.notIn.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AnyRules {
    const message = { ...baseAnyRules } as AnyRules;
    message.required = object.required !== undefined && object.required !== null ? Boolean(object.required) : false;
    message.in = (object.in ?? []).map((e: any) => String(e));
    message.notIn = (object.notIn ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: AnyRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AnyRules>): AnyRules {
    const message = { ...baseAnyRules } as AnyRules;
    message.required = object.required ?? false;
    message.in = (object.in ?? []).map((e) => e);
    message.notIn = (object.notIn ?? []).map((e) => e);
    return message;
  },
};

const baseDurationRules: object = { required: false };

export const DurationRules = {
  encode(message: DurationRules, writer: Writer = Writer.create()): Writer {
    if (message.required === true) {
      writer.uint32(8).bool(message.required);
    }
    if (message.const !== undefined) {
      Duration.encode(message.const, writer.uint32(18).fork()).ldelim();
    }
    if (message.lt !== undefined) {
      Duration.encode(message.lt, writer.uint32(26).fork()).ldelim();
    }
    if (message.lte !== undefined) {
      Duration.encode(message.lte, writer.uint32(34).fork()).ldelim();
    }
    if (message.gt !== undefined) {
      Duration.encode(message.gt, writer.uint32(42).fork()).ldelim();
    }
    if (message.gte !== undefined) {
      Duration.encode(message.gte, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.in) {
      Duration.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.notIn) {
      Duration.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DurationRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDurationRules } as DurationRules;
    message.in = [];
    message.notIn = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.required = reader.bool();
          break;
        case 2:
          message.const = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.lt = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.lte = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.gt = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.gte = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.in.push(Duration.decode(reader, reader.uint32()));
          break;
        case 8:
          message.notIn.push(Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DurationRules {
    const message = { ...baseDurationRules } as DurationRules;
    message.required = object.required !== undefined && object.required !== null ? Boolean(object.required) : false;
    message.const = object.const !== undefined && object.const !== null ? Duration.fromJSON(object.const) : undefined;
    message.lt = object.lt !== undefined && object.lt !== null ? Duration.fromJSON(object.lt) : undefined;
    message.lte = object.lte !== undefined && object.lte !== null ? Duration.fromJSON(object.lte) : undefined;
    message.gt = object.gt !== undefined && object.gt !== null ? Duration.fromJSON(object.gt) : undefined;
    message.gte = object.gte !== undefined && object.gte !== null ? Duration.fromJSON(object.gte) : undefined;
    message.in = (object.in ?? []).map((e: any) => Duration.fromJSON(e));
    message.notIn = (object.notIn ?? []).map((e: any) => Duration.fromJSON(e));
    return message;
  },

  toJSON(message: DurationRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    message.const !== undefined && (obj.const = message.const ? Duration.toJSON(message.const) : undefined);
    message.lt !== undefined && (obj.lt = message.lt ? Duration.toJSON(message.lt) : undefined);
    message.lte !== undefined && (obj.lte = message.lte ? Duration.toJSON(message.lte) : undefined);
    message.gt !== undefined && (obj.gt = message.gt ? Duration.toJSON(message.gt) : undefined);
    message.gte !== undefined && (obj.gte = message.gte ? Duration.toJSON(message.gte) : undefined);
    if (message.in) {
      obj.in = message.in.map((e) => (e ? Duration.toJSON(e) : undefined));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => (e ? Duration.toJSON(e) : undefined));
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DurationRules>): DurationRules {
    const message = { ...baseDurationRules } as DurationRules;
    message.required = object.required ?? false;
    message.const =
      object.const !== undefined && object.const !== null ? Duration.fromPartial(object.const) : undefined;
    message.lt = object.lt !== undefined && object.lt !== null ? Duration.fromPartial(object.lt) : undefined;
    message.lte = object.lte !== undefined && object.lte !== null ? Duration.fromPartial(object.lte) : undefined;
    message.gt = object.gt !== undefined && object.gt !== null ? Duration.fromPartial(object.gt) : undefined;
    message.gte = object.gte !== undefined && object.gte !== null ? Duration.fromPartial(object.gte) : undefined;
    message.in = (object.in ?? []).map((e) => Duration.fromPartial(e));
    message.notIn = (object.notIn ?? []).map((e) => Duration.fromPartial(e));
    return message;
  },
};

const baseTimestampRules: object = { required: false, ltNow: false, gtNow: false };

export const TimestampRules = {
  encode(message: TimestampRules, writer: Writer = Writer.create()): Writer {
    if (message.required === true) {
      writer.uint32(8).bool(message.required);
    }
    if (message.const !== undefined) {
      Timestamp.encode(toTimestamp(message.const), writer.uint32(18).fork()).ldelim();
    }
    if (message.lt !== undefined) {
      Timestamp.encode(toTimestamp(message.lt), writer.uint32(26).fork()).ldelim();
    }
    if (message.lte !== undefined) {
      Timestamp.encode(toTimestamp(message.lte), writer.uint32(34).fork()).ldelim();
    }
    if (message.gt !== undefined) {
      Timestamp.encode(toTimestamp(message.gt), writer.uint32(42).fork()).ldelim();
    }
    if (message.gte !== undefined) {
      Timestamp.encode(toTimestamp(message.gte), writer.uint32(50).fork()).ldelim();
    }
    if (message.ltNow === true) {
      writer.uint32(56).bool(message.ltNow);
    }
    if (message.gtNow === true) {
      writer.uint32(64).bool(message.gtNow);
    }
    if (message.within !== undefined) {
      Duration.encode(message.within, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TimestampRules {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTimestampRules } as TimestampRules;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.required = reader.bool();
          break;
        case 2:
          message.const = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lte = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.gt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.gte = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.ltNow = reader.bool();
          break;
        case 8:
          message.gtNow = reader.bool();
          break;
        case 9:
          message.within = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimestampRules {
    const message = { ...baseTimestampRules } as TimestampRules;
    message.required = object.required !== undefined && object.required !== null ? Boolean(object.required) : false;
    message.const = object.const !== undefined && object.const !== null ? fromJsonTimestamp(object.const) : undefined;
    message.lt = object.lt !== undefined && object.lt !== null ? fromJsonTimestamp(object.lt) : undefined;
    message.lte = object.lte !== undefined && object.lte !== null ? fromJsonTimestamp(object.lte) : undefined;
    message.gt = object.gt !== undefined && object.gt !== null ? fromJsonTimestamp(object.gt) : undefined;
    message.gte = object.gte !== undefined && object.gte !== null ? fromJsonTimestamp(object.gte) : undefined;
    message.ltNow = object.ltNow !== undefined && object.ltNow !== null ? Boolean(object.ltNow) : false;
    message.gtNow = object.gtNow !== undefined && object.gtNow !== null ? Boolean(object.gtNow) : false;
    message.within =
      object.within !== undefined && object.within !== null ? Duration.fromJSON(object.within) : undefined;
    return message;
  },

  toJSON(message: TimestampRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    message.const !== undefined && (obj.const = message.const.toISOString());
    message.lt !== undefined && (obj.lt = message.lt.toISOString());
    message.lte !== undefined && (obj.lte = message.lte.toISOString());
    message.gt !== undefined && (obj.gt = message.gt.toISOString());
    message.gte !== undefined && (obj.gte = message.gte.toISOString());
    message.ltNow !== undefined && (obj.ltNow = message.ltNow);
    message.gtNow !== undefined && (obj.gtNow = message.gtNow);
    message.within !== undefined && (obj.within = message.within ? Duration.toJSON(message.within) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TimestampRules>): TimestampRules {
    const message = { ...baseTimestampRules } as TimestampRules;
    message.required = object.required ?? false;
    message.const = object.const ?? undefined;
    message.lt = object.lt ?? undefined;
    message.lte = object.lte ?? undefined;
    message.gt = object.gt ?? undefined;
    message.gte = object.gte ?? undefined;
    message.ltNow = object.ltNow ?? false;
    message.gtNow = object.gtNow ?? false;
    message.within =
      object.within !== undefined && object.within !== null ? Duration.fromPartial(object.within) : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(''));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
