// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  /// here '/^chatbot/i' is the regular expression which test the input command has the regex with checks also it's case sensitive too

  return /^chatbot/i.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  /// here  emoji[0-9] is the regular expression which replace the input message with the regex
  return message.replace(/emoji[0-9]+/g, "");
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  ///  regex is (+##) ###-###-### , where # represents a digit .
  return /[(+##) ###-###-###]/.test(number)
    ? "Thanks! You can now download me to your phone."
    : `Oops, it seems like I can't reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  /// words that consist of a sequence of word characters (\w*) separated by a period (.)
  return userInput.match(/\w*\.\w*/g);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  /// split the string by the comma and a whitespace and reverse the array and join it by space
  return `Nice to meet you, ${fullName.split(", ").reverse().join(" ")}`;
}
