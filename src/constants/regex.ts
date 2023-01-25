export const GST_REGEX =
  /^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[z|Z][0-9a-zA-Z]{1}$/;
export const PAN_REGEX = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
export const PIN_CODE_REGEX = /^([0-9]){6}$/;
export const MOBILE_REGEX = /^([0-9]){10}$/;
export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const VPA_REGEX = /[a-zA-Z0-9.\-_]{2,49}@[a-zA-Z._]{2,49}/;
export const LANDLINE_REGEX = /^([0-9]){11}$/;
