(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return r})),a.d(t,"default",(function(){return d}));var n=a(3),s=a(7),c=(a(0),a(175)),i=(a(180),a(181),a(176),a(177),{id:"index-cluster",title:"Manage Your Redis Cluster using RedisInsight Cluster Management Tool",sidebar_label:"Manage Your Redis Cluster",slug:"/explore/redisinsight/cluster"}),l={unversionedId:"explore/redisinsight/cluster/index-cluster",id:"explore/redisinsight/cluster/index-cluster",isDocsHomePage:!1,title:"Manage Your Redis Cluster using RedisInsight Cluster Management Tool",description:"A full-featured desktop GUI client, RedisInsight is an essential tool for Redis developers. It is a lightweight multi-platform management visualization tool that helps you design, develop, and optimize your application capabilities in a single easy-to-use environment. RedisInsight not just makes it easier to interact with your databases and manage your data, but also helps in managing Redis Cluster with ease.",source:"@site/docs/explore/redisinsight/cluster/index-cluster.mdx",slug:"/explore/redisinsight/cluster",permalink:"/explore/redisinsight/cluster",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/cluster/index-cluster.mdx",version:"current",sidebar_label:"Manage Your Redis Cluster",sidebar:"docs",previous:{title:"Reduce Redis Memory usage using RedisInsight Memory Analyzer Tool",permalink:"/explore/redisinsight/memoryanalyzer"},next:{title:"Using Redis Streams with RedisInsight",permalink:"/explore/redisinsight/streams"}},r=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Step 1. Install Redis from source",id:"step-1-install-redis-from-source",children:[]},{value:"Step 2: Executing the create-cluster script",id:"step-2-executing-the-create-cluster-script",children:[]},{value:"Step 3. Access Redis Instance",id:"step-3-access-redis-instance",children:[]},{value:"Step 4. Verify the cluster nodes",id:"step-4-verify-the-cluster-nodes",children:[]},{value:"Step 5: Set Protected mode off",id:"step-5-set-protected-mode-off",children:[]},{value:"Step 6: Connecting to Redis database",id:"step-6-connecting-to-redis-database",children:[]},{value:"Step 7. Select the seed nodes of your cluster",id:"step-7-select-the-seed-nodes-of-your-cluster",children:[]},{value:"Step 8. Choose the database",id:"step-8-choose-the-database",children:[]},{value:"Step 9. Click &quot;Cluster Management&quot;",id:"step-9-click-cluster-management",children:[]},{value:"Step 10. Choose &quot;Master Layout View&quot;",id:"step-10-choose-master-layout-view",children:[]},{value:"Step 11. Resharding",id:"step-11-resharding",children:[]},{value:"Step 12. Viewing Physical Layout",id:"step-12-viewing-physical-layout",children:[]},{value:"Step 13. Adding keys Manually",id:"step-13-adding-keys-manually",children:[]},{value:"Step 14. Cyclic redundancy checkpoint",id:"step-14-cyclic-redundancy-checkpoint",children:[]},{value:"Step 15. Adding a New Node",id:"step-15-adding-a-new-node",children:[]},{value:"Step 16. Make Replica Of",id:"step-16-make-replica-of",children:[]},{value:"Step 17. Deleting a Node",id:"step-17-deleting-a-node",children:[]},{value:"Step 18. Removing the node from the Cluster",id:"step-18-removing-the-node-from-the-cluster",children:[]},{value:"Step 19. Failover",id:"step-19-failover",children:[]},{value:"Addition Links",id:"addition-links",children:[]}],o={toc:r};function d(e){var t=e.components,i=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A full-featured desktop GUI client, RedisInsight is an essential tool for Redis developers. It is a lightweight multi-platform management visualization tool that helps you design, develop, and optimize your application capabilities in a single easy-to-use environment. RedisInsight not just makes it easier to interact with your databases and manage your data, but also helps in managing Redis Cluster with ease."),Object(c.b)("h2",{id:"getting-started"},"Getting Started"),Object(c.b)("p",null,"Redis Cluster is an active-passive cluster implementation that consists of master and slave nodes.\nThere are two kinds of nodes: master and slave nodes. To get started with Redis Cluster, follow the below steps to build 3 Master and 3 Replicas."),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Please Note: In Redis, slave nodes are generally called replicas as they hold the replicated slots that their masters have."))),Object(c.b)("h2",{id:"step-1-install-redis-from-source"},"Step 1. Install Redis from source"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/create/from-source/"}),"Follow this link")," to build Redis from source in your local system."),Object(c.b)("h2",{id:"step-2-executing-the-create-cluster-script"},"Step 2: Executing the create-cluster script"),Object(c.b)("p",null,"By default, if you compile Redis from source, you will find a simple bash script called create-cluster under /utils/ directory.\nIn order to start a 6 nodes cluster with 3 masters and 3 slaves, just type the following commands:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," cd /utils/create-cluster\n ./create-cluster start\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," Starting 30001\n Starting 30002\n Starting 30003\n Starting 30004\n Starting 30005\n Starting 30006\n")),Object(c.b)("h2",{id:"step-3-access-redis-instance"},"Step 3. Access Redis Instance"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," redis-cli -c -p 30001\n 127.0.0.1:30001> set foo bar\n -> Redirected to slot [12182] located at 127.0.0.1:30003\n OK\n 127.0.0.1:30003>\n")),Object(c.b)("h2",{id:"step-4-verify-the-cluster-nodes"},"Step 4. Verify the cluster nodes"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{})," cluster nodes\n b37c153b7cb63a863b51fa08bdde46bfda9c6a98 127.0.0.1:30005@40005 slave 3e85f061bebd9b566e1cbf7f03cbe3e1859babbc 0 1620304753134 3 connected\n 8a1a0ba49e1845feff5314fbb8b73a2ec99e3647 127.0.0.1:30001@40001 master - 0 1620304753033 1 connected 0-5460\n bd7326d7b907a04214372fe41189e41763a1e1df 127.0.0.1:30006@40006 slave 8a1a0ba49e1845feff5314fbb8b73a2ec99e3647 0 1620304753033 1 connected\n 3e85f061bebd9b566e1cbf7f03cbe3e1859babbc 127.0.0.1:30003@40003 myself,master - 0 1620304753000 3 connected 10923-16383\n 67bbe43901031fa4bfe4cee6105d284f4fe7733b 127.0.0.1:30002@40002 master - 0 1620304753033 2 connected 5461-10922\n 0e3fb1de10b722458c959b35f1468275c34ba49f 127.0.0.1:30004@40004 slave 67bbe43901031fa4bfe4cee6105d284f4fe7733b 0 1620304753134 2 connected\n")),Object(c.b)("h2",{id:"step-5-set-protected-mode-off"},"Step 5: Set Protected mode off"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," redis-cli -c -p 30001\n 127.0.0.1:30001> CONFIG SET protected-mode no\n OK\n 127.0.0.1:30001> exit\n")),Object(c.b)("h2",{id:"step-6-connecting-to-redis-database"},"Step 6: Connecting to Redis database"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/explore/redisinsight/getting-started"}),"Follow this link")," to install RedisInsight on your local system."),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(348).default})),Object(c.b)("p",null,"Enter the details - host IP, port and name of the database of your choice. "),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(349).default})),Object(c.b)("h2",{id:"step-7-select-the-seed-nodes-of-your-cluster"},"Step 7. Select the seed nodes of your cluster"),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(350).default})),Object(c.b)("h2",{id:"step-8-choose-the-database"},"Step 8. Choose the database"),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(351).default})),Object(c.b)("h2",{id:"step-9-click-cluster-management"},'Step 9. Click "Cluster Management"'),Object(c.b)("p",null,"On the left menu of the RedisInsight, click 'Cluster Management' option to check the cluster health and cluster nodes."),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(352).default})),Object(c.b)("h2",{id:"step-10-choose-master-layout-view"},'Step 10. Choose "Master Layout View"'),Object(c.b)("p",null,"This view only contains information about the masters present in the Redis Cluster. The information present is - slot ranges, host, port and few metrics gathered from redis INFO Command."),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(353).default})),Object(c.b)("p",null,"Cluster Management comes with three different views to analyze your cluster architecture(as shown above)."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Master Layout - This view only contains information about the masters present in the Redis Cluster. The information present is - slot ranges, host, port and few metrics gathered from redis INFO Command."),Object(c.b)("li",{parentName:"ul"},"Master-Replica Layout - This view contains masters along with their replicas. This view contains information about slots ranges, host, port, etc for both master and replica."),Object(c.b)("li",{parentName:"ul"},"Physical Layout - This view gives you a representation of your server i.e. it groups all nodes according to the physical server they reside in.")),Object(c.b)("h2",{id:"step-11-resharding"},"Step 11. Resharding"),Object(c.b)("p",null,"Resharding basically means to move hash slots from a set of nodes to another set of nodes, and like cluster creation it is accomplished using the redis-cli utility. "),Object(c.b)("p",null,"Typically, to start a resharding, you pass \u201c--cluster reshard\u201d option to the redis client CLI as shown below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," redis-cli --cluster reshard 127.0.0.1:7000\n")),Object(c.b)("p",null,"You only need to specify a single node, redis-cli will find the other nodes automatically."),Object(c.b)("p",null,"With RedisInsight, it can be performed over the GUI. Open Cluster Management > Manual Resharding option >  Destination node > Source Nodes and enter the slot range.\nBefore we perform resharding, let us try to insert real-time keys into the cluster. You need to have ruby installed on your system "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ruby"}),' \n require \'./cluster\'\n\n if ARGV.length != 2\n   startup_nodes = [\n       {:host => "127.0.0.1", :port => 30001},\n       {:host => "127.0.0.1", :port => 30003}\n    ]\n  else\n   startup_nodes = [\n       {:host => ARGV[0], :port => ARGV[1].to_i}\n   ]\n  end\n\n rc = RedisCluster.new(startup_nodes,32,:timeout => 0.1)\n\n last = false\n\n while not last\n   begin\n       last = rc.get("__last__")\n       last = 0 if !last\n   rescue => e\n       puts "error #{e.to_s}"\n       sleep 1\n   end\n end\n\n ((last.to_i+1)..1000000000).each{|x|\n   begin\n       rc.set("foo#{x}",x)\n       puts rc.get("foo#{x}")\n       rc.set("__last__",x)\n   rescue => e\n       puts "error #{e.to_s}"\n   end\n   sleep 0.1\n }\n')),Object(c.b)("p",null,"Save the above content in a file called testing.rb as shown below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," ruby testing.rb\n")),Object(c.b)("p",null,"The above script will insert keys into the Redis cluster."),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(354).default})),Object(c.b)("p",null,"You can check the real-time logs via MONITOR command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' \n 1620718356.267791 [0 127.0.0.1:56056] "set" "foo2124" "2124"\n 1620718356.268153 [0 127.0.0.1:56056] "get" "foo2124"\n 1620718356.683092 [0 127.0.0.1:56056] "set" "foo2128" "2128"\n 1620718356.683403 [0 127.0.0.1:56056] "get" "foo2128"\n 1620718357.208191 [0 127.0.0.1:56056] "set" "foo2133" "2133"\n 1620718357.208636 [0 127.0.0.1:56056] "get" "foo2133"\n 1620718357.625524 [0 127.0.0.1:56056] "set" "foo2137" "2137"\n 1620718357.625961 [0 127.0.0.1:56056] "get" "foo2137"\n 1620718358.248578 [0 127.0.0.1:56056] "set" "foo2143" "2143"\n')),Object(c.b)("p",null,'Let us perform a manual sharding. Select "Manual Sharding" under Actions tab.\nIt will ask to select destination and source nodes. It allows to enter slot range too as shown below.'),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(355).default})),Object(c.b)("p",null,'Click "Next".'),Object(c.b)("p",null,"The resharding process begins instantly."),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(356).default})),Object(c.b)("p",null,"Finally, you can view the changes under the Cluster Management section as shown below:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(357).default})),Object(c.b)("h2",{id:"step-12-viewing-physical-layout"},"Step 12. Viewing Physical Layout"),Object(c.b)("p",null,"This view gives you a representation of your Cluster nodes i.e. it groups all nodes according to the physical server they reside in."),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(358).default})),Object(c.b)("h2",{id:"step-13-adding-keys-manually"},"Step 13. Adding keys Manually"),Object(c.b)("p",null,"Let us try to add a key against the cluster nodes"),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(359).default})),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'\n Connecting...\n\n Pinging Redis server on 127.0.0.1:30003...\n Connected.\n Ready to execute commands.\n\n >> set hello world\n\n -> Redirected to slot [866] located at 127.0.0.1:30001\n"OK"\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),' \n >> set lang python\n\n 127.0.0.1:30001 [master]\n "OK"\n\n 127.0.0.1:30003 [master]\n (error) MOVED 3807 127.0.0.1:30001\n\n 127.0.0.1:30002 [master]\n (error) MOVED 3807 127.0.0.1:30001\n')),Object(c.b)("p",null,"Once you set up a cluster, a cluster will have a sharding. "),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," > set a1 100\n")),Object(c.b)("p",null,"Once you add a key to Redis, hashes slot is calculated.Redis calculates the slot where the key is going to land by taking CRC16 of the key modulo 16384."),Object(c.b)("h2",{id:"step-14-cyclic-redundancy-checkpoint"},"Step 14. Cyclic redundancy checkpoint"),Object(c.b)("p",null,"By Finding the hashes slot for the keys, your data will automatically be spread across the nodes. "),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(360).default})),Object(c.b)("p",null,"In a Redis cluster, there are 16,384 slots available. The first master node in a cluster contain 0 to 5500, 5501 to 11000 and 3rd 11001 to 16,385"),Object(c.b)("h2",{id:"step-15-adding-a-new-node"},"Step 15. Adding a New Node"),Object(c.b)("p",null,"Let us add a new node in the Redis configuration file:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"  % tree\n .\n \u251c\u2500\u2500 30010\n \u2502   \u251c\u2500\u2500 appendonly.aof\n \u2502   \u251c\u2500\u2500 dump.rdb\n \u2502   \u251c\u2500\u2500 nodes.conf\n \u2502   \u2514\u2500\u2500 redis.conf\n \u2514\u2500\u2500 redis.conf\n\n 1 directory, 5 files\n\n % cat 30010/redis.conf \n port 30011\n cluster-enabled yes\n cluster-config-file nodes.conf\n cluster-node-timeout 5000\n appendonly yes\n")),Object(c.b)("p",null,"It's time to run the new Redis instance."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," redis-server ./redis.conf \n 34168:C 10 May 2021 15:49:04.251 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo\n 34168:C 10 May 2021 15:49:04.251 # Redis version=6.1.241, bits=64, commit=00000000, modified=0, pid=34168, just started\n 34168:C 10 May 2021 15:49:04.251 # Configuration loaded\n 34168:M 10 May 2021 15:49:04.252 * Increased maximum number of open files to 10032 (it was originally set to 2560).\n 34168:M 10 May 2021 15:49:04.252 * monotonic clock: POSIX clock_gettime\n 34168:M 10 May 2021 15:49:04.253 * No cluster configuration found, I'm d3c15d55a60a4cdf9c1f4de8b0c637dda3500ca0\n                _._                                                  \n           _.-``__ ''-._                                             \n      _.-``    `.  `_.  ''-._           Redis 6.1.241 (00000000/0) 64 bit\n  .-`` .-```.  ```\\/    _.,_ ''-._                                   \n (    '      ,       .-`  | `,    )     Running in cluster mode\n |`-._`-...-` __...-.``-._|'` _.-'|     Port: 30010\n |    `-._   `._    /     _.-'    |     PID: 34168\n  `-._    `-._  `-./  _.-'    _.-'                                   \n |`-._`-._    `-.__.-'    _.-'_.-'|                                  \n |    `-._`-._        _.-'_.-'    |           http://redis.io        \n  `-._    `-._`-.__.-'_.-'    _.-'                                   \n |`-._`-._    `-.__.-'    _.-'_.-'|                                  \n |    `-._`-._        _.-'_.-'    |                                  \n  `-._    `-._`-.__.-'_.-'    _.-'                                   \n      `-._    `-.__.-'    _.-'                                       \n          `-._        _.-'                                           \n              `-.__.-'                                               \n\n 34168:M 10 May 2021 15:49:04.254 # Server initialized\n 34168:M 10 May 2021 15:49:04.254 * Ready to accept connections\n")),Object(c.b)("p",null,"Enter the host and port details of the new node:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(235).default})),Object(c.b)("p",null,"Now, you can view the nodes layout as shown below:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(235).default})),Object(c.b)("p",null,"You can also view it via CLI on your local system if you want to verify the new node entry."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," redis-cli -p 30001\n127.0.0.1:30001> cluster nodes\n1a959116fb6c32726b8513668149c8a27dc61613 127.0.0.1:30006@40006 slave 7ac14c8345df91640bc7174de903f0dd8683a1d2 0 1620642235140 7 connected\n5d2ce263fb025d38c2d7626d48422d0e28280aa7 127.0.0.1:30004@40004 slave 6f0096be6248834c0f3237192020d12ff6496f74 0 1620642235343 1 connected\n7ac14c8345df91640bc7174de903f0dd8683a1d2 127.0.0.1:30003@40003 master - 0 1620642235039 7 connected 0-1000 10923-16383\ne0daeb42432323b587b281f26b26b90e9e6f2482 127.0.0.1:30005@40005 slave 011209ddc3577e8ec15efbcb12e38a405bda20f9 0 1620642235241 2 connected\n6f0096be6248834c0f3237192020d12ff6496f74 127.0.0.1:30001@40001 myself,master - 0 1620642235000 1 connected 1001-5460\n011209ddc3577e8ec15efbcb12e38a405bda20f9 127.0.0.1:30002@40002 master - 0 1620642235039 2 connected 5461-10922\nd3c15d55a60a4cdf9c1f4de8b0c637dda3500ca0 127.0.0.1:30010@40010 master - 0 1620642235140 0 connected\n127.0.0.1:30001> \n")),Object(c.b)("h2",{id:"step-16-make-replica-of"},"Step 16. Make Replica Of"),Object(c.b)("p",null,"Whenever you add a new node, Redis allows you to rebalance your cluster as shown below:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(361).default})),Object(c.b)("p",null,"You can select the master that will be replicas of the specific node:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(362).default})),Object(c.b)("p",null,'Choose the right master node of your choice  and click "Proceed". '),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(363).default}),"\n",Object(c.b)("img",{alt:"cluster",src:a(364).default})),Object(c.b)("h2",{id:"step-17-deleting-a-node"},"Step 17. Deleting a Node"),Object(c.b)("p",null,"To delete a node, select \u201cMaster-Replica Nodes\u201d option and you will see all the slave nodes"),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(365).default}),"\n",Object(c.b)("img",{alt:"cluster",src:a(366).default}),"\n",Object(c.b)("img",{alt:"cluster",src:a(367).default})),Object(c.b)("h2",{id:"step-18-removing-the-node-from-the-cluster"},"Step 18. Removing the node from the Cluster"),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(368).default})),Object(c.b)("h2",{id:"step-19-failover"},"Step 19. Failover"),Object(c.b)("p",null,"In order to upgrade the Redis process of one of the master nodes it is a good idea to failover it in order to turn it into a slave with minimal impact on availability."),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(369).default})),Object(c.b)("p",null,"Also, RedisInsight Cluster Management tool allows you to rebalance your cluster by manually defining the slot coverage as shown below: "),Object(c.b)("p",null,Object(c.b)("img",{alt:"cluster",src:a(370).default}),"\n",Object(c.b)("img",{alt:"cluster",src:a(371).default})),Object(c.b)("h2",{id:"addition-links"},"Addition Links"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/slowlog"}),"Slowlog Configuration using RedisInsight")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/memoryanalyzer"}),"Memory Analysis using RedisInsight")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Visualize Redis database keys using RedisInsight Browser Tool")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/streams"}),"Using Redis Streams with RedisInsight"))))}d.isMDXComponent=!0},177:function(e,t,a){"use strict";var n=a(0),s=a.n(n),c=a(175),i=a(183);a(176),a(55);t.a=function(e){var t=s.a.useState(!1),a=t[0],n=t[1];return s.a.createElement("div",{className:"ri-container"},s.a.createElement("div",{className:"ri-description-short"},s.a.createElement("div",{className:"ri-icon"},s.a.createElement("span",{className:"fe fe-zap"})),s.a.createElement("div",{className:"ri-detail"},s.a.createElement("div",{className:"ri-title"},s.a.createElement("a",{href:e.page},e.title)),s.a.createElement("div",{className:"ri-description"},e.description,s.a.Children.count(e.children)>0&&s.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&s.a.createElement("div",{className:"ri-description-long"},s.a.createElement(c.a,{components:i.a},e.children)))}},178:function(e,t,a){"use strict";var n=a(0),s=a(179);t.a=function(){var e=Object(n.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},179:function(e,t,a){"use strict";var n=a(0),s=Object(n.createContext)(void 0);t.a=s},180:function(e,t,a){"use strict";var n=a(0),s=a.n(n),c=a(178),i=a(182),l=a(56),r=a.n(l),o=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,u=e.values,b=e.groupId,p=e.className,f=Object(c.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,g=Object(n.useState)(l),O=g[0],j=g[1],y=n.Children.toArray(e.children);if(null!=b){var v=m[b];null!=v&&v!==O&&u.some((function(e){return e.value===v}))&&j(v)}var w=function(e){j(e),null!=b&&h(b,e)},_=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},p)},u.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",r.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(_,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},181:function(e,t,a){"use strict";var n=a(3),s=a(0),c=a.n(s);t.a=function(e){var t=e.children,a=e.hidden,s=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:s}),t)}},235:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster21-d84ec01f260197f649ec09ff860269f4.png"},348:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster2-4bcb26fe20e3ee6a0cf2d8bba17b4eb6.png"},349:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster3-8ec442689d3f82488ded585defb50d0b.png"},350:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster4-1207760451c42d4dff3d7907cdf1354b.png"},351:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster5-b57cdf486280ffd0c7fee7579d124830.png"},352:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster6-f3a3eb5428cdeb7d9febb2755797aab7.png"},353:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster7-c52a5b8b16dbb0149ef3327aa0c60eb5.png"},354:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster9-5ce237df5c2dae3baea9f7afab7968d6.png"},355:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster10-1214c064a1a24b851ed6376b7771895f.png"},356:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster11-c82be4e47c32253b9f9765ab23a95527.png"},357:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster14-0c7123e50955d1667acb9876cb33a36a.png"},358:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster13-28a95e66fe334ac795e8ec7c17b59054.png"},359:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster19-e9a456cdb890372bddaab0e39e7a4644.png"},360:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster20-3402b2f4291b987c4332ed88ae75a728.png"},361:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster22-49233ae74e96fe3dcfa61aa1daf47ee4.png"},362:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster23-b7115ce1507140332bd54d8ee80c6958.png"},363:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster24-f3154cea8b490c1e0bbccb4d6da1981a.png"},364:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster25-7bdff59913d688966740dfb1bc9b169a.png"},365:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster27-b58c5cc980dd19395feaf0894eff4cfc.png"},366:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster28-91b9d7c92b957f357d17cf6a6e8d3928.png"},367:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster29-32e5a5928dcda5063c71eb631cf7103b.png"},368:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster30-5bcc8054e2ebd17b821ba6ac344d8414.png"},369:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster31-109144a079dfb55948511df7ae166d5d.png"},370:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster32-e6efc018e3a8e5988ddfd10c7e3d4984.png"},371:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cluster33-4b4cf3d05715ad638b11115b9931672f.png"}}]);