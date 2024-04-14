// TradingViewWidget.jsx
import React, { memo, useEffect, useRef } from 'react';

function TradingViewWidget() {
	const container = useRef<HTMLDivElement>(null);

	useEffect(
		() => {
			if (!document.getElementById("tradingview-script")) {
				const script = document.createElement("script");
				script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
				script.type = "text/javascript";
				script.async = true;
				script.id = "tradingview-script"; // Add an ID to the script element

				script.innerHTML = `
					{
					  "autosize": true,
					  "symbol": "BITSTAMP:BTCUSD",
					  "interval": "D",
					  "timezone": "Etc/UTC",
					  "theme": "light",
					  "style": "3",
					  "locale": "en",
					  "enable_publishing": false,
					  "hide_top_toolbar": true,
					  "hide_legend": true,
					  "allow_symbol_change": false,
					  "save_image": false,
					  "calendar": false,
					  "hide_volume": true,
					  "support_host": "https://www.tradingview.com"
					}`;

				if (container.current) {
					container.current.appendChild(script);
				}
			}
		},
		[]
	);

	return (
		<div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
			<div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
			{/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
		</div>
	);
}

export default memo(TradingViewWidget);
