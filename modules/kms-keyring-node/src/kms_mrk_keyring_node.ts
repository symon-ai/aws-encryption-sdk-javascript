// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AwsKmsMrkAwareSymmetricKeyringClass,
  AwsKmsMrkAwareSymmetricKeyringInput,
} from '@symon-ai/aws-crypto-kms-keyring'
import {
  KeyringNode,
  Newable,
  NodeAlgorithmSuite,
} from '@symon-ai/aws-crypto-material-management-node'
import { KMSClient } from '@aws-sdk/client-kms'

export type AwsKmsMrkAwareSymmetricKeyringNodeInput =
  AwsKmsMrkAwareSymmetricKeyringInput<KMSClient>

export const AwsKmsMrkAwareSymmetricKeyringNode =
  AwsKmsMrkAwareSymmetricKeyringClass<NodeAlgorithmSuite, KMSClient>(
    KeyringNode as Newable<KeyringNode>
  )
