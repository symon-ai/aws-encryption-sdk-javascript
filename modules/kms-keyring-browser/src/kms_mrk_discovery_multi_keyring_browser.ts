// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { getAwsKmsMrkAwareDiscoveryMultiKeyringBuilder } from '@aws-crypto/kms-keyring'
import {
  MultiKeyringWebCrypto,
  WebCryptoAlgorithmSuite,
} from '@aws-crypto/material-management-browser'
import { getKmsClient } from '.'
import { AwsKmsMrkAwareSymmetricDiscoveryKeyringBrowser } from './kms_mrk_discovery_keyring_browser'
import { KMSClient } from '@aws-sdk/client-kms'

export const buildAwsKmsMrkAwareDiscoveryMultiKeyringBrowser =
  getAwsKmsMrkAwareDiscoveryMultiKeyringBuilder<WebCryptoAlgorithmSuite, KMSClient>(
    AwsKmsMrkAwareSymmetricDiscoveryKeyringBrowser,
    MultiKeyringWebCrypto,
    getKmsClient
  )
