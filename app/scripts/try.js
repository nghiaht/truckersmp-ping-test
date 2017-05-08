/**
 * Created by nghia on 2017/5/8.
 */

const servers = [{"id":1,"game":"ETS2","ip":"163.172.64.173","port":42860,"name":"Europe 1","shortname":"EU #1","online":true,"players":42,"queue":0,"maxplayers":2300,"speedlimiter":1,"collisions":true,"carsforplayers":true,"policecarsforplayers":false,"afkenabled":true,"syncdelay":100},{"id":3,"game":"ETS2","ip":"191.101.3.39","port":42860,"name":"United States","shortname":"US 1","online":true,"players":2,"queue":0,"maxplayers":1024,"speedlimiter":0,"collisions":true,"carsforplayers":true,"policecarsforplayers":false,"afkenabled":true,"syncdelay":100},{"id":4,"game":"ETS2","ip":"164.132.204.68","port":49200,"name":"Europe 2","shortname":"EU #2","online":true,"players":829,"queue":0,"maxplayers":3500,"speedlimiter":0,"collisions":true,"carsforplayers":true,"policecarsforplayers":false,"afkenabled":true,"syncdelay":100},{"id":5,"game":"ETS2","ip":"37.187.170.151","port":42890,"name":"Europe 3","shortname":"EU #3","online":true,"players":98,"queue":0,"maxplayers":2300,"speedlimiter":0,"collisions":true,"carsforplayers":true,"policecarsforplayers":false,"afkenabled":true,"syncdelay":100},{"id":7,"game":"ETS2","ip":"181.41.220.214","port":42860,"name":"South America","shortname":"SA #1","online":true,"players":1,"queue":0,"maxplayers":1500,"speedlimiter":0,"collisions":true,"carsforplayers":true,"policecarsforplayers":false,"afkenabled":true,"syncdelay":100},{"id":10,"game":"ATS","ip":"163.172.64.173","port":42850,"name":"Europe 2","shortname":"EU 2","online":true,"players":12,"queue":0,"maxplayers":2000,"speedlimiter":0,"collisions":true,"carsforplayers":true,"policecarsforplayers":false,"afkenabled":true,"syncdelay":100},{"id":11,"game":"ATS","ip":"191.101.3.39","port":42850,"name":"United States","shortname":"US 1","online":true,"players":76,"queue":0,"maxplayers":1500,"speedlimiter":0,"collisions":true,"carsforplayers":true,"policecarsforplayers":false,"afkenabled":true,"syncdelay":100},{"id":13,"game":"ETS2","ip":"43.251.158.210","port":42860,"name":"Hong Kong","shortname":"HK 1","online":true,"players":5,"queue":0,"maxplayers":500,"speedlimiter":0,"collisions":true,"carsforplayers":true,"policecarsforplayers":false,"afkenabled":true,"syncdelay":100}];

var isRunning = false;
const pingService = new Ping();

function initElements() {

}

function normalizeHost(host) {
  var prefix = 'http://';
  if (host.substr(0, prefix.length) !== prefix)
  {
    host = prefix + host;
  }
  return host;
}

function doPing(host) {
  host = normalizeHost(host);

  var t = 0;
  var interval = setInterval(function () {
    pingService.ping(host, function (result) {
      showResult(result, true);
    });
    t += 1000;

    if (t >= 5000) clearInterval(interval);
  }, 1000);
}

function showResult(result, should_append) {
  var pingResult = document.getElementById("ping-result");
  if (should_append) pingResult.value += ["Độ trễ ",result, "ms", "\n"].join("");
  else pingResult.value = result;
}
