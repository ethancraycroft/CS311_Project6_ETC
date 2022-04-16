let CAclicked = false;
let CLclicked = false;
let IPEclicked = false;
let LTLclicked = false;
let INTclicked = false;

function openCA()
{
    document.getElementById("openCA").style.visibility = "hidden";

    //select addCA div
    const div = document.getElementById("addCA");

    //create labels and text boxes

    //label 1 label and textbox: Cash
    let CAbox1 = document.createElement("div");
    CAbox1.setAttribute("class", "box");
    let CA1label = document.createElement("label");
    let CA1text = document.createTextNode("Cash:")
    CA1label.appendChild(CA1text);
    CA1label.setAttribute("class", "CAlabel");
    CA1label.setAttribute("id", "CA1label");
    let CA1input = document.createElement("input");
    CA1input.setAttribute("type", "text");
    CA1input.setAttribute("class", "CAinput");
    CA1input.setAttribute("id", "CA1input");
    CAbox1.appendChild(CA1label);
    CAbox1.appendChild(CA1input);

    //label 2 label and textbox: Inventory
    let CAbox2 = document.createElement("div");
    CAbox2.setAttribute("class", "box");
    let CA2label = document.createElement("label");
    let CA2text = document.createTextNode("Cash:")
    CA2label.appendChild(CA2text);
    CA2label.setAttribute("class", "CAlabel");
    CA2label.setAttribute("id", "CA2label");
    let CA2input = document.createElement("input");
    CA2input.setAttribute("type", "text");
    CA2input.setAttribute("class", "CAinput");
    CA2input.setAttribute("id", "CA2input");
    CAbox2.appendChild(CA2label);
    CAbox2.appendChild(CA2input);    

    //label 3 label and textbox: Supplies
    let CAbox3 = document.createElement("div");
    CAbox3.setAttribute("class", "box");
    let CA3label = document.createElement("label");
    let CA3text = document.createTextNode("Supplies:")
    CA3label.appendChild(CA3text);
    CA3label.setAttribute("class", "CAlabel");
    CA3label.setAttribute("id", "CA3label");
    let CA3input = document.createElement("input");
    CA3input.setAttribute("type", "text");
    CA3input.setAttribute("class", "CAinput");
    CA3input.setAttribute("id", "CA3input");    
    CAbox3.appendChild(CA3label);
    CAbox3.appendChild(CA3input);
    
    //label 4 label and textbox: Temporary Investments
    let CAbox4 = document.createElement("div");
    CAbox4.setAttribute("class", "box");
    let CA4label = document.createElement("label");
    let CA4text = document.createTextNode("Temporary Investments:")
    CA4label.appendChild(CA4text);
    CA4label.setAttribute("class", "CAlabel");
    CA4label.setAttribute("id", "CA4label");    
    let CA4input = document.createElement("input");
    CA4input.setAttribute("type", "text");
    CA4input.setAttribute("class", "CAinput");
    CA4input.setAttribute("id", "CA4input");
    CAbox4.appendChild(CA4label);
    CAbox4.appendChild(CA4input);

    //label 5 for total current assets
    let CAbox5 = document.createElement("div");
    CAbox5.setAttribute("class", "box");
    let CA5label = document.createElement("label");
    CA5label.setAttribute("class", "CAlabel");
    CA5label.setAttribute("id", "CAtotlabel");
    let CA5text = document.createTextNode("Total Current Assets:")
    CA5label.appendChild(CA5text);
    CAbox5.appendChild(CA5label);

    //appending new divs to existing ones
    div.appendChild(CAbox1);
    div.appendChild(CAbox2);
    div.appendChild(CAbox3);
    div.appendChild(CAbox4);
    div.appendChild(CAbox5);

    CAclicked = true;
}

function openCL()
{

    document.getElementById("openCL").style.visibility = "hidden";
    //select addCL div
    const div = document.getElementById("addCL");

    //create labels and text boxes

    //label 1 label and textbox: Accounts Payable
    let CLbox1 = document.createElement("div");
    CLbox1.setAttribute("class", "box");
    let CL1label = document.createElement("label");
    let CL1text = document.createTextNode("Accounts Payable:")
    CL1label.appendChild(CL1text);
    CL1label.setAttribute("class", "CLlabel");
    CL1label.setAttribute("id", "CL1label");
    let CL1input = document.createElement("input");
    CL1input.setAttribute("type", "text");
    CL1input.setAttribute("class", "CLinput");
    CL1input.setAttribute("id", "CL1input");
    CLbox1.appendChild(CL1label);
    CLbox1.appendChild(CL1input);

    //label 2 label and textbox: Notes Payable
    let CLbox2 = document.createElement("div");
    CLbox2.setAttribute("class", "box");
    let CL2label = document.createElement("label");
    let CL2text = document.createTextNode("Notes Payable:")
    CL2label.appendChild(CL2text);
    CL2label.setAttribute("class", "CLlabel");
    CL2label.setAttribute("id", "CL2label");    
    let CL2input = document.createElement("input");
    CL2input.setAttribute("type", "text");
    CL2input.setAttribute("class", "CLinput");
    CL2input.setAttribute("id", "CL2input");    
    CLbox2.appendChild(CL2label);
    CLbox2.appendChild(CL2input);

    //label 3 label and textbox: Interest Payable
    let CLbox3 = document.createElement("div");
    CLbox3.setAttribute("class", "box");
    let CL3label = document.createElement("label");
    let CL3text = document.createTextNode("Interest Payable:")
    CL3label.appendChild(CL3text);
    CL3label.setAttribute("class", "CLlabel");
    CL3label.setAttribute("id", "CL3label");    
    let CL3input = document.createElement("input");
    CL3input.setAttribute("type", "text");
    CL3input.setAttribute("class", "CLinput");
    CL3input.setAttribute("id", "CL3input");
    CLbox3.appendChild(CL3label);
    CLbox3.appendChild(CL3input);

    //label 4 label and textbox: Wages Payable
    let CLbox4 = document.createElement("div");
    CLbox4.setAttribute("class", "box");
    let CL4label = document.createElement("label");
    let CL4text = document.createTextNode("Wages Payable:")
    CL4label.appendChild(CL4text);
    CL4label.setAttribute("class", "CLlabel");
    CL4label.setAttribute("id", "CL4label");    
    let CL4input = document.createElement("input");
    CL4input.setAttribute("type", "text");
    CL4input.setAttribute("class", "CLinput");
    CL4input.setAttribute("id", "CL4input");
    CLbox4.appendChild(CL4label);
    CLbox4.appendChild(CL4input);

    //label 5 label and textbox: Accrued Expenses
    let CLbox5 = document.createElement("div");
    CLbox5.setAttribute("class", "box");
    let CL5label = document.createElement("label");
    let CL5text = document.createTextNode("Accrued Expenses:")
    CL5label.appendChild(CL5text);
    CL5label.setAttribute("class", "CLlabel");
    CL5label.setAttribute("id", "CL5label");    
    let CL5input = document.createElement("input");
    CL5input.setAttribute("type", "text");
    CL5input.setAttribute("class", "CLinput");
    CL5input.setAttribute("id", "CL5input");
    CLbox5.appendChild(CL5label);
    CLbox5.appendChild(CL5input);

    //label 6 for total current liabilities
    let CLbox6 = document.createElement("div");
    CLbox6.setAttribute("class", "box");
    let CL6label = document.createElement("label");
    CL6label.setAttribute("class", "CLlabel")
    CL6label.setAttribute("id", "CLtotlabel");
    let CL6text = document.createTextNode("Total Current Liabilities:")
    CL6label.appendChild(CL6text);
    CLbox6.appendChild(CL6label);


    //appending new divs to existing div
    div.appendChild(CLbox1);
    div.appendChild(CLbox2);
    div.appendChild(CLbox3);
    div.appendChild(CLbox4);
    div.appendChild(CLbox5);
    div.appendChild(CLbox6);

    CLclicked = true;
}

function openIPE()
{
    document.getElementById("openIPE").style.visibility = "hidden";

    //select addIPE div
    const div = document.getElementById("addIPE");

    //create labels and text boxes

    //label 1 label and textbox: Land
    let IPEbox1 = document.createElement("div");
    IPEbox1.setAttribute("class", "box");
    let IPE1label = document.createElement("label");
    let IPE1text = document.createTextNode("Land:")
    IPE1label.appendChild(IPE1text);
    IPE1label.setAttribute("class", "IPElabel");
    IPE1label.setAttribute("id", "IPE1label");
    let IPE1input = document.createElement("input");
    IPE1input.setAttribute("type", "text");
    IPE1input.setAttribute("class", "IPEinput");
    IPE1input.setAttribute("id", "IPE1input");
    IPEbox1.appendChild(IPE1label);
    IPEbox1.appendChild(IPE1input);


    //label 2 label and textbox: Building and Improvements
    let IPEbox2 = document.createElement("div");
    IPEbox2.setAttribute("class", "box");
    let IPE2label = document.createElement("label");
    let IPE2text = document.createTextNode("Building and Improvements:")
    IPE2label.appendChild(IPE2text);
    IPE2label.setAttribute("class", "IPElabel");
    IPE2label.setAttribute("id", "IPE2label");
    let IPE2input = document.createElement("input");
    IPE2input.setAttribute("type", "text");
    IPE2input.setAttribute("class", "IPEinput");
    IPE2input.setAttribute("id", "IPE2input");
    IPEbox2.appendChild(IPE2label);
    IPEbox2.appendChild(IPE2input);


    //label 3 label and textbox: Equipment
    let IPEbox3 = document.createElement("div");
    IPEbox3.setAttribute("class", "box");
    let IPE3label = document.createElement("label");
    let IPE3text = document.createTextNode("Equipment:")
    IPE3label.appendChild(IPE3text);
    IPE3label.setAttribute("class", "IPElabel");
    IPE3label.setAttribute("id", "IPE3label");
    let IPE3input = document.createElement("input");
    IPE3input.setAttribute("type", "text");
    IPE3input.setAttribute("class", "IPEinput");
    IPE3input.setAttribute("id", "IPE3input");
    IPEbox3.appendChild(IPE3label);
    IPEbox3.appendChild(IPE3input);


    //label 4 label and textbox: Temporary Investments
    let IPEbox4 = document.createElement("div");
    IPEbox4.setAttribute("class", "box");
    let IPE4label = document.createElement("label");
    let IPE4text = document.createTextNode("Temporary Investments:")
    IPE4label.appendChild(IPE4text);
    IPE4label.setAttribute("class", "IPElabel");
    IPE4label.setAttribute("id", "IPE4label");
    let IPE4input = document.createElement("input");
    IPE4input.setAttribute("type", "text");
    IPE4input.setAttribute("class", "IPEinput");
    IPE4input.setAttribute("id", "IPE4input");
    IPEbox4.appendChild(IPE4label);
    IPEbox4.appendChild(IPE4input);

    //label 5 for total investment property and equipment
    let IPEbox5 = document.createElement("div");
    IPEbox5.setAttribute("class", "box");
    let IPE5label = document.createElement("label");
    IPE5label.setAttribute("id", "IPElabel");
    IPE5label.setAttribute("id", "IPEtotlabel");
    let IPE5text = document.createTextNode("Total Investment Property & Equipment:")
    IPE5label.appendChild(IPE5text);
    IPEbox5.appendChild(IPE5label);

    //appending new divs to existing ones
    div.appendChild(IPEbox1);
    div.appendChild(IPEbox2);
    div.appendChild(IPEbox3);
    div.appendChild(IPEbox4);
    div.appendChild(IPEbox5);

    IPEclicked = true;
}

function openLTL()
{
    document.getElementById("openLTL").style.visibility = "hidden";
    //select addLTL div
    const div = document.getElementById("addLTL");

    //create labels and text boxes

    //label 1 label and textbox: Notes Payable
    let LTLbox1 = document.createElement("div");
    LTLbox1.setAttribute("class", "box");
    let LTL1label = document.createElement("label");
    let LTL1text = document.createTextNode("Notes Payable:")
    LTL1label.appendChild(LTL1text);
    LTL1label.setAttribute("class", "LTLlabel");
    LTL1label.setAttribute("id", "LTL1label");
    let LTL1input = document.createElement("input");
    LTL1input.setAttribute("type", "text");
    LTL1input.setAttribute("class", "LTLinput");
    LTL1input.setAttribute("id", "LTL1input");
    LTLbox1.appendChild(LTL1label);
    LTLbox1.appendChild(LTL1input);

    //label 2 label and textbox: Bonds Payable
    let LTLbox2 = document.createElement("div");
    LTLbox2.setAttribute("class", "box");
    let LTL2label = document.createElement("label");
    let LTL2text = document.createTextNode("Bonds Payable:")
    LTL2label.appendChild(LTL2text);
    LTL2label.setAttribute("class", "LTLlabel");
    LTL2label.setAttribute("id", "LTL2label");
    let LTL2input = document.createElement("input");
    LTL2input.setAttribute("type", "text");
    LTL2input.setAttribute("class", "LTLinput");
    LTL2input.setAttribute("id", "LTL2input");
    LTLbox2.appendChild(LTL2label);
    LTLbox2.appendChild(LTL2input);

    //label 3 for total current liabilities
    let LTLbox3 = document.createElement("div");
    LTLbox3.setAttribute("class", "box");
    let LTL3label = document.createElement("label");
    LTL3label.setAttribute("id", "LTLtotlabel");
    LTL3label.setAttribute("class", "LTLlabel");
    let LTL3text = document.createTextNode("Total Long-Term Liabilities:")
    LTL3label.appendChild(LTL3text);
    LTLbox3.appendChild(LTL3label);

    //appending new divs to existing ones
    div.appendChild(LTLbox1);
    div.appendChild(LTLbox2);
    div.appendChild(LTLbox3);

    LTLclicked = true;
}

function openINT()
{
    document.getElementById("openINT").style.visibility = "hidden";
    //select addINT div
    const div = document.getElementById("addINT");

    //create labels and text boxes

    //label 1 label and textbox: Trade Names
    let INTbox1 = document.createElement("div");
    INTbox1.setAttribute("class", "box");
    let INT1label = document.createElement("label");
    let INT1text = document.createTextNode("Trade Names:")
    INT1label.appendChild(INT1text);
    INT1label.setAttribute("class", "INTlabel");
    INT1label.setAttribute("id", "INT1label");
    let INT1input = document.createElement("input");
    INT1input.setAttribute("type", "text");
    INT1input.setAttribute("class", "INTinput");
    INT1input.setAttribute("id", "INT1input");
    INTbox1.appendChild(INT1label);
    INTbox1.appendChild(INT1input);

    //label 2 label and textbox: Goodwill
    let INTbox2 = document.createElement("div");
    INTbox2.setAttribute("class", "box");
    let INT2label = document.createElement("label");
    let INT2text = document.createTextNode("Goodwill:")
    INT2label.appendChild(INT2text);
    INT2label.setAttribute("class", "INTlabel");
    INT2label.setAttribute("id", "INT2label");
    let INT2input = document.createElement("input");
    INT2input.setAttribute("type", "text");
    INT2input.setAttribute("class", "INTinput");
    INT2input.setAttribute("id", "INT2input");
    INTbox2.appendChild(INT2label);
    INTbox2.appendChild(INT2input);

    //label 3 for total current liabilities
    let INTbox3 = document.createElement("div");
    INTbox3.setAttribute("class", "box");
    let INT3label = document.createElement("label");
    INT3label.setAttribute("class", "INTlabel");
    INT3label.setAttribute("id", "INTtotlabel");
    let INT3text = document.createTextNode("Total Long-Term Liabilities:")
    INT3label.appendChild(INT3text);
    INTbox3.appendChild(INT3label);

    //appending new divs to existing ones
    div.appendChild(INTbox1);
    div.appendChild(INTbox2);
    div.appendChild(INTbox3);

    INTclicked = true;
}

function calculate()
{
    //CALCULATING TOTAL ASSETS
    //---------------------------------------------------------------------------------
    //calculate total current assets
    let TCA = 0;

    //checks to see if CA has been opened
    if(CAclicked == true)
    {
        for(i=1; i<5; i++)
        {
            TCA += Number(document.getElementById("CA" + i + "input").value);
        }
        let totalCA = document.getElementById("CAtotlabel");
        totalCA.innerHTML= "Total Current Assets: " + (TCA).toLocaleString('en-US', { style: 'currency',currency: 'USD',});
    }
    else
    {
        TCA = 0;
    }

    //calculate total investment property and equipment
    let TIPE = 0;

    //checks to see if IPE has been opened
    if(IPEclicked == true)
    {
        for(i=1; i<5; i++)
        {
            TIPE += Number(document.getElementById("IPE" + i + "input").value);
        }
        let totalIPE = document.getElementById("IPEtotlabel")
        totalIPE.innerHTML = "Total Investment Property & Equipement: " + (TIPE).toLocaleString('en-US', { style: 'currency',currency: 'USD',});
    }
    else
    {
        TIPE = 0;
    }

    //calculate total intangibles
    let TINT = 0;

    //checks to see if INT has been opened
    if(INTclicked == true)
    {
        for(i=1; i<3; i++)
        {
            TINT += Number(document.getElementById("INT" + i + "input").value);
        }
        let totalINT = document.getElementById("INTtotlabel");
        totalINT.innerHTML = "Total Intangibles: " + (TINT).toLocaleString('en-US', { style: 'currency',currency: 'USD',});
    }
    else
    {
        TINT = 0;
    }

    //sum of total assets
    let totalAssets = TCA + TIPE + TINT;

    let BelarmineTotalAssets = document.getElementById("TA");
    BelarmineTotalAssets.innerHTML = "Total Assets: " + (totalAssets).toLocaleString('en-US', { style: 'currency',currency: 'USD',});


    //CALCULATING TOTAL LIABILITIES
    //---------------------------------------------------------------------------------

     //calculate total current liabilities
     let TCL = 0;

     //checks to see if CL has been opened
     if(CLclicked == true)
     {
        for(i=1; i<6; i++)
        {
            TCL += Number(document.getElementById("CL" + i + "input").value);
        }
        let totalCL = document.getElementById("CLtotlabel");
        totalCL.innerHTML= "Total Current Liabilites: " + (TCL).toLocaleString('en-US', { style: 'currency',currency: 'USD',});
    }
    else
    {
        TCL = 0;
    }

     //calculate total long-term liabilities
    let TLTL = 0;

    //checks to see if CL has been opened
    if(LTLclicked == true)
    {
       for(i=1; i<3; i++)
       {
           TLTL += Number(document.getElementById("LTL" + i + "input").value);
       }
       let totalLTL = document.getElementById("LTLtotlabel");
       totalLTL.innerHTML= "Total Long-Term Liabilites: " + (TLTL).toLocaleString('en-US', { style: 'currency',currency: 'USD',});
    }
    else
    {
        TLTL = 0;
    }

    //sum of total liabilities
    totalLiabilities = TCL + TLTL;

    let BellarmineTotalLiabilities = document.getElementById("TL");
    BellarmineTotalLiabilities.innerHTML = "Total Liabilities: " + (totalLiabilities).toLocaleString('en-US', { style: 'currency',currency: 'USD',});

    //CALCULATING TOTAL POSITION
    //---------------------------------------------------------------------------------------------
    let position = totalAssets - totalLiabilities;

    let BellarminePosition = document.getElementById("POS");
    BellarminePosition.innerHTML = "Position: " + (position).toLocaleString('en-US', { style: 'currency',currency: 'USD',});
}
