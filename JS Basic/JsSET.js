const products =[{
title: 'high-back bench',
company: 'ikea'},
{
title: 'albany table',
company: 'marcos'},
{
title: 'accent chair',
company: 'caressa'},
{
title: 'wooden table',
company: 'ikea'}
];

const Uniquecompany=new Set(products.map((item)=>item.company));

const companyList=[...Uniquecompany];
console.log(companyList);