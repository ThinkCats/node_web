/**
 * Created by wang on 15-2-27.
 */

var redis=require('redis');
client=redis.createClient(6379,'localhost',{});

client.on('error',function(err){
    console.log("error:"+err);
});

client.set("string key","String val",redis.print);
client.hmset("hashKey","hashValue1","hashValue2",redis.print());
client.hmset("hashKey","hashValue3","",redis.print);

client.hkeys("hashKey",function(err,reply){
    console.log(reply.length+" replies");
    reply.forEach(function(rep,i){
        console.log(" "+i+":"+rep)
    });
    client.quit();
});
