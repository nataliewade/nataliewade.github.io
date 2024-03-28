"use strict";

let R = null;
let chart = null;
let tbl2 = null;

let b1 = document.querySelector("#b1");

async function sc()
{
	//Swal.fire("OK");
	let url = `https://juxinglong.github.io/static/data/states.json`;

	let r = await fetch(url);
	let rj = await r.json();

	let cc = document.querySelector("#cc");

	let opts = {
		type: "bar",
		data: {
			labels:rj.map(x=>x.st),
			datasets: [{
				data: rj.map(x => x.p),
				label:"Population",
			},],
		},

	};

	if (chart != null)
	{
		chart.destroy();
	}
	cc.innerHTML = ``;

	new Chart(cc, opts);

	let sdiv = document.querySelector("#sdiv");

	let p = {
		data: rj,
		pagination: { limit: 5, },
		sort: true,
		search: true,
		columns: [{ id: "st", name: "STATE" }, {id:"p",name:"POP" },],
	};

	if (tbl2 != null)
	{
		tabl2.destroy();
	}
	sdiv.innerHTML = ``;

	let tbl2 = new gridjs.Grid(p);
	tabl2.render(sdiv);

	console.log(rj);
	R = rj;

}

b1.addEventListener("click",sc);