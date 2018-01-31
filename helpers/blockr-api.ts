declare var require, module;

var http = require('http');
var querystring = require('querystring');
var request = require('request');

module Blockr {


    var http_config = {
        host: 'localhost',
        port: 9000
        path: '',
        method: 'GET',
        headers: {}
    };

    export function http_request(url, callback, post = false, post_data = "") {
        var _cb = function(response) {
            var str = '';
            //another chunk of data has been received, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });
            //the whole response has been received, pass to callback
            response.on('end', function () {
                callback(str)
            });
        };
        var options = http_config;
        options.path = url;
        options.method = (post === true) ? 'POST' : 'GET';

        var req = http.request(options, _cb);
        if(post === true) {
            options.headers = {
              'Content-Type': 'application/json'
            }
            console.log("writing post request data: ", post_data);
            post_data = JSON.stringify({"rawtx":post_data});
            req.write(post_data);
        }
        req.end();
    }

    export class Address {
        protected prefix = '/api/addr/';

        unspent(addresses, callback) {
            var addr_str;
            if(Array.isArray(addresses)) {
                addr_str = addresses.join();
            } else {
                // is already string
                addr_str = addresses;
            }
            var url = '/api/addrs/' + addr_str + '/utxo';
            console.log(http_config.host);
            console.log(url);
            return http_request(url, callback);
        }

        info(addresses, callback) {
            var addr_str;
            if(Array.isArray(addresses)) {
                addr_str = addresses.join();
            } else {
                // is already string
                addr_str = addresses;
            }
            var url = this.prefix + addr_str;
            console.log(http_config.host);
            console.log(url);
            return http_request(url, callback);
        }
        txs(addresses, callback) {
            var addr_str;
            if(Array.isArray(addresses)) {
                addr_str = addresses.join();
            } else {
                // is already string
                addr_str = addresses;
            }
            var url = '/api/addrs/' + addr_str + '/txs';
            console.log(http_config.host);
            console.log(url);
            return http_request(url, callback);
        }

        balances(address, callback) {
            var url = this.prefix  + address;

            console.log(http_config.host);
            console.log(url);
            return http_request(url, callback);
        }
    }
    export class TX {
        protected prefix = '/api/tx/send';

        push(tx : string, callback) {
            request.post('https://florinsight.alexandria.io/api/tx/send', { form: {rawtx: tx}}, function(err, res, body){
              if(err){
                callback(err);
              }
              callback(body);
            });
        }
    }
}

module.exports = Blockr;
