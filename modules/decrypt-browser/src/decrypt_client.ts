// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { _decrypt } from './decrypt'
import {
  CommitmentPolicy,
  ClientOptions,
  needs,
} from '@symon-ai/aws-crypto-material-management-browser'

type CurryFirst<fn extends (...a: any[]) => any> = fn extends (
  _: any,
  ...tail: infer TAIL
) => any
  ? TAIL
  : []

export function buildDecrypt(
  options: CommitmentPolicy | Partial<ClientOptions> = {}
): {
  decrypt: (...args: CurryFirst<typeof _decrypt>) => ReturnType<typeof _decrypt>
} {
  const {
    commitmentPolicy = CommitmentPolicy.REQUIRE_ENCRYPT_REQUIRE_DECRYPT,
    maxEncryptedDataKeys = false,
  } = typeof options === 'string' ? { commitmentPolicy: options } : options

  /* Precondition: browser buildDecrypt needs a valid commitmentPolicy. */
  needs(CommitmentPolicy[commitmentPolicy], 'Invalid commitment policy.')
  /* Precondition: browser buildDecrypt needs a valid maxEncryptedDataKeys. */
  needs(
    maxEncryptedDataKeys === false || maxEncryptedDataKeys >= 1,
    'Invalid maxEncryptedDataKeys value.'
  )

  const clientOptions: ClientOptions = {
    commitmentPolicy,
    maxEncryptedDataKeys,
  }
  return {
    decrypt: _decrypt.bind({}, clientOptions),
  }
}
