// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export * from '@symon-ai/aws-crypto-encrypt-node'
export * from '@symon-ai/aws-crypto-decrypt-node'
export * from '@symon-ai/aws-crypto-material-management-node'
export * from '@symon-ai/aws-crypto-caching-materials-manager-node'
export * from '@symon-ai/aws-crypto-kms-keyring-node'
export * from '@symon-ai/aws-crypto-raw-aes-keyring-node'
export * from '@symon-ai/aws-crypto-raw-rsa-keyring-node'

import {
  CommitmentPolicy,
  ClientOptions,
} from '@symon-ai/aws-crypto-material-management-node'

import { buildEncrypt } from '@symon-ai/aws-crypto-encrypt-node'
import { buildDecrypt } from '@symon-ai/aws-crypto-decrypt-node'

export function buildClient(
  options?: CommitmentPolicy | ClientOptions
): ReturnType<typeof buildEncrypt> & ReturnType<typeof buildDecrypt> {
  return {
    ...buildEncrypt(options),
    ...buildDecrypt(options),
  }
}
