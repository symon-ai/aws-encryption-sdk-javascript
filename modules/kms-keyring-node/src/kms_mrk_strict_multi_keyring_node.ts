// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { getAwsKmsMrkAwareStrictMultiKeyringBuilder } from '@symon-ai/aws-crypto-kms-keyring'
import { KmsClientSupplier } from '@symon-ai/aws-crypto-kms-keyring'
import {
  MultiKeyringNode,
  NodeAlgorithmSuite,
} from '@symon-ai/aws-crypto-material-management'
import { getKmsClient } from '.'
import { AwsKmsMrkAwareSymmetricKeyringNode } from './kms_mrk_keyring_node'
import { KMSClient } from '@aws-sdk/client-kms'

export interface AwsKmsMrkAwareStrictMultiKeyringNodeInput {
  clientProvider?: KmsClientSupplier<KMSClient>
  generatorKeyId?: string
  keyIds?: string[]
  grantTokens?: string[]
}

export const buildAwsKmsMrkAwareStrictMultiKeyringNode =
  getAwsKmsMrkAwareStrictMultiKeyringBuilder<NodeAlgorithmSuite, KMSClient>(
    AwsKmsMrkAwareSymmetricKeyringNode,
    MultiKeyringNode,
    getKmsClient
  )
