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

var myObj = new Object();
	myObj['あれ'] = [420, 20160101];
	myObj['これ'] = [415, 20160202];
	myObj['バナナプラグ'] = ['4F廊下420の扉の前の引出し', 20160107];
	myObj['おんどとり'] = ['411棚 (中央上段) ダンボール内', 20160113];
	myObj['電源タップ'] = ['411窓側棚 (右下段)', 20160203];
	myObj['実験系廃棄物処理依頼伝票'] = ['412の東側棚 (吉井さんの横の棚)', 20151212];

module.exports = function(robot) {
  robot.respond(/(.*)どこ？/i, function(msg) {
    msg.send(msg.match[1] + "は" + myObj[msg.match[1]][1] + "時点では" + myObj[msg.match[1]][0] + "にありました");
  });
};

