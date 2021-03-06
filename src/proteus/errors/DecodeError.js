/*
 * Wire
 * Copyright (C) 2016 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

/* eslint no-unused-vars: "off" */

'use strict';

const ProteusError = require('./ProteusError');

/** @module errors */

/**
 * @extends ProteusError
 * @param {string} [message]
 * @param {string} [code]
 * @returns {string}
 */
class DecodeError extends ProteusError {
  constructor(message = 'Unknown decoding error', code = 3) {
    super(message, code);
  }

  static get CODE() {
    return {
      CASE_300: 300,
      CASE_301: 301,
      CASE_302: 302,
      CASE_303: 303,
    };
  }
}

/**
 * @extends DecodeError
 * @param {string} [message]
 * @param {string} [code]
 * @returns {string}
 */
class InvalidType extends DecodeError {
  constructor(message = 'Invalid type', code) {
    super(message, code);
  }
}

/**
 * @extends DecodeError
 * @param {string} [message]
 * @param {string} [code]
 * @returns {string}
 */
class InvalidArrayLen extends DecodeError {
  constructor(message = 'Invalid array length', code) {
    super(message, code);
  }
}

/**
 * @extends DecodeError
 * @param {string} [message]
 * @param {string} [code]
 * @returns {string}
 */
class LocalIdentityChanged extends DecodeError {
  constructor(message = 'Local identity changed', code) {
    super(message, code);
  }
}

Object.assign(DecodeError, {
  InvalidType,
  InvalidArrayLen,
  LocalIdentityChanged,
});

module.exports = ProteusError.DecodeError = DecodeError;
