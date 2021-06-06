<!DOCTYPE html>
<html lang="en">
<%- include(`${partials}/head`); -%>

<body>
<%- include(`${partials}/header_main`); -%>
<pre id="log">
***************************** POLYGON NETWORK *********************************************

*************** 👨‍🌾 UNOFFICIAL SOUTHPARK.FINANCE FARMING CALCULATOR 👨‍🌾 ****************
INFO  : https://southpark.finance/
*******************************************************************************************

*** If you are being rate limited, please select a different RPC URL from here https://docs.matic.network/docs/develop/network-details/network/ ***

</pre>
<div class="loader--1"></div>
<%- include(`${partials}/scripts`, {scriptname: 'matic_southpark'}); -%>
</body>
</html>
