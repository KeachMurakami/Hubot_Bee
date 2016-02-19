/*#  Description
  A hubot script that does the things
#
# Configuration:
#   LIST_OF_ENV_VARS_TO_SET
#
# Commands:
#   hubot hello - <what the respond trigger does>
#   orly - <what the hear trigger does>
#
# Notes:
#   <optional notes required for the script>
#
# Author:
#   MurakamiKeach <m.keach.11@gmail.com> */
// Description:
//  respond Hi

module.exports = function(robot) {
  robot.respond(/(.*)どこ？/, function(msg) {
    msg.send(msg.match[1] + "は**時点にはここにありました");
  });
};