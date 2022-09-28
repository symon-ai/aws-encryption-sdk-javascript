// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AwsKmsMrkAwareSymmetricDiscoveryKeyringClass,
  AwsKmsMrkAwareSymmetricDiscoveryKeyringInput,
} from '@aws-crypto/kms-keyring'
import {
  KeyringNode,
  Newable,
  NodeAlgorithmSuite,
} from '@aws-crypto/material-management-node'
import { KMSClient } from '@aws-sdk/client-kms'

export type AwsKmsMrkAwareSymmetricDiscoveryKeyringNodeInput =
  AwsKmsMrkAwareSymmetricDiscoveryKeyringInput<KMSClient>

export const AwsKmsMrkAwareSymmetricDiscoveryKeyringNode =
  AwsKmsMrkAwareSymmetricDiscoveryKeyringClass<NodeAlgorithmSuite, KMSClient>(
    KeyringNode as Newable<KeyringNode>
  )
