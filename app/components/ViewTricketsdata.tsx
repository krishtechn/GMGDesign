let Fromlocation={
    "time":"09:45AM",
    "fromlocation":"Kathmandu",
    "currentdate":"24 Feb 2023"
}
let totalHour = "16h 25m";
let Tolocation={
    "time":"09:45AM",
    "fromlocation":"Kathmandu",
    "currentdate":"24 Feb 2023"
}

let passengerdetails={
    name:"krish kharal"
}


let payment = {
    "status":"paid",
    "method":"Esewa",
    "idNo":"38438434"
}

let Buscompany = {
    "company":"Sandeep Yatayat",
    "operatorName":"Sandeep shrestha",
    "no":"94394934"
}

let Brand = {
    "name":"TATA",
    "type":"Bus",
    "noPlate":"Ba 12 kha 1997",
    color:"Red"
}
let BookingDetailsPayment = [
    {
        name:"Transaction",
        value:"23948232"
    },
    {
        name:"Status",
        value:"Paid"
    },
    {
        name:"Method",
        value:"eSewa"
    },
    {
        name:"Date",
        value:"17 July 2023 • 10:43 AM"
    },
    {
        name:"Bookin ID",
        value:"23948232"
    },
    {
        name:"Tickets",
        value:"6x"
    },
    {
        name:"Price",
        value:"Rs. 12,000"
    },
]



let Bookingpassengerdetails = [
    {
        "seatname":"c",
        "passengerName":"Sandeep Shrestha",
        "tricket":"9861xxxxxx",
        "email":"sandeep@gmail.com",
        "age":"18 years",
        "seatcolor":"f79009",
        "showfulldetails":true,
    },
    {
        "seatname":"A1",
        "passengerName":"Sandeep gaihre",
        "tricket":"9861xxxxxx",
        "email":"sandeep@gmail.com",
        "age":"19 years",
        "seatcolor":"d92d20",
        "showfulldetails":true,
    },
    {
        "seatname":"c",
        "passengerName":"Sandeep Shrestha",
        "tricket":"9861xxxxxx",
        "email":"sandeep@gmail.com",
        "age":"18 years",
        "seatcolor":"f79009",
        "showfulldetails":true,
    },
    {
        "seatname":"A1",
        "passengerName":"Sandeep gaihre",
        "tricket":"9861xxxxxx",
        "email":"sandeep@gmail.com",
        "age":"19 years",
        "seatcolor":"d92d20",
        "showfulldetails":true,
    },
];

const tabs = [
    {
      label: 'Boarding',
      content:[
        {
            title:"your details Boarding",
            subtitle:"Please provide your name and email"
        }
      ] 
    },
    {
      label: 'Drop',
      content:[
        {
            title:"your details Drop",
            subtitle:"Please provide your name and email"
        },
        {
            title:"your details Drop",
            subtitle:"Please provide your name and email"
        }
      ]
    },
    {
      label: 'Break',
      content:[
        {
            title:"your details Break",
            subtitle:"Please provide your name and email"
        },
        {
            title:"your details Break",
            subtitle:"Please provide your name and email"
        }
      ]
    },
  ];


  const tabs1 = [
    {
      label: 'Home',
      content:[
        {
            title:"your details Boarding",
            subtitle:"Please provide your name and email"
        }
      ] 
    },
    {
      label: 'About',
      content:[
        {
            title:"your details Drop",
            subtitle:"Please provide your name and email"
        },
        {
            title:"your details Drop",
            subtitle:"Please provide your name and email"
        }
      ]
    },
    {
      label: 'Services',
      content:[
        {
            title:"your details Break",
            subtitle:"Please provide your name and email"
        },
        {
            title:"your details Break",
            subtitle:"Please provide your name and email"
        }
      ]
    },
  ];

export {
  Fromlocation,Tolocation,passengerdetails,totalHour, payment,Buscompany,Brand,BookingDetailsPayment,Bookingpassengerdetails,tabs,tabs1 
}