import {
  EMAIL_REGEX,
  GST_REGEX,
  LANDLINE_REGEX,
  MOBILE_REGEX,
  PAN_REGEX,
  PIN_CODE_REGEX,
  VPA_REGEX,
} from 'src/constants/regex';

export class DataValidationService {
  /**
   * validates gst number
   */
  static isGstinValid(gstNumber: string): boolean {
    const gstNumberRegex = GST_REGEX;
    return gstNumberRegex.test(gstNumber);
  }

  /**
   * validates pan number
   */
  static isPanValid(panNumber: string): boolean {
    const panNumberRegex = PAN_REGEX;
    return panNumberRegex.test(panNumber);
  }

  /**
   * validates pincode
   */
  static isPincodeValid(pincode: string): boolean {
    const pincodeRegex = PIN_CODE_REGEX;
    return pincodeRegex.test(pincode);
  }

  /**
   * validates mobile number
   */
  static isMobileNumberValid(mobileNumber: string): boolean {
    const mobileNumberRegex = MOBILE_REGEX;
    return mobileNumberRegex.test(mobileNumber);
  }

  /**
   * validates email
   */
  static isEmailValid(email: string): boolean {
    const emailRegex = EMAIL_REGEX;
    return emailRegex.test(email);
  }

  /**
   * validates vpa
   */
  static isVpaValid(vpa: string): boolean {
    const vpaRegex = VPA_REGEX;
    return vpaRegex.test(vpa);
  }

  /**
   * validates landline number
   */
  static isLandlineNumberValid(landlineNumber: string): boolean {
    const landlineNumberRegex = LANDLINE_REGEX;
    return landlineNumberRegex.test(landlineNumber);
  }

  /**
   * parses gst number
   */
  static parseGstNumber(gstNumber: string, validate = true): string | null {
    const data = gstNumber.replace(/[^a-zA-Z0-9]/g, '');
    return validate ? (this.isGstinValid(data) ? data : null) : data;
  }

  /**
   * parses pan number
   */
  static parsePanNumber(panNumber: string, validate = true): string | null {
    const data = panNumber.replace(/[^a-zA-Z0-9]/g, '');
    return validate ? (this.isPanValid(data) ? data : null) : data;
  }

  /**
   * parses pincode
   */
  static parsePincode(pincode: string): string | null {
    const data = pincode.replace(/[^0-9]/g, '');
    return this.isPincodeValid(data) ? data : null;
  }

  /**
   * parses mobile number
   */
  static parseMobileNumber(mobileNumber: string): string | null {
    const data = mobileNumber.replace(/[^0-9]/g, '').slice(-10);
    return this.isMobileNumberValid(data) ? data : null;
  }

  /**
   * parses email
   */
  static parseEmail(email: string): string | null {
    const data = email.replace(/[^a-zA-Z0-9@.]/g, '');
    return this.isEmailValid(data) ? data : null;
  }

  /**
   * parses landline number
   */
  static parseLandlineNumber(landlineNumber: string): string | null {
    const data = landlineNumber.replace(/[^0-9]/g, '');
    return this.isLandlineNumberValid(data) ? data : null;
  }
}
