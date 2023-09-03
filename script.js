 function initialize()
{
  inputContainer=document.getElementById("input");
  frequencyOutput=document.getElementById("frequency");
  meanOutput=document.getElementById("mean");
  medianOutput=document.getElementById("median");
  modeOutput=document.getElementById("mode");
  doubleOutput=document.getElementById("double");
  tripleOutput=document.getElementById("triple");
}
function rollDice()
{
  numDice = inputContainer.dice.value;
  numRolls = inputContainer.rolls.value;
  rollArraySum = [];
  rollArray = [];
  for(let j=1;j<=numRolls;j++)
  {
    var rollValue = 0;
    var rollSum = 0;
    for(let i=1; i<=numDice;i++)
    {
      rollValue = Math.round(Math.random()*5+1);
      rollArray.push(rollValue);
      rollSum+=rollValue;
    }
    rollArraySum.push(rollSum);

  }
  if(numDice>=1 && numRolls>0)
  {
    addDouble();
    addTriple();
    sortArray(rollArray);
    addFrequency();
    addMean();
    addMedian();
    addMode();
  }
}
function sortArray(arr)
{
  for(let j=0;j<arr.length;j++)
  {
    for(let i=j+1;i<arr.length;i++)
    {
      if(arr[j]>arr[i])
      {
        let temp1=arr[i];
        let temp2=arr[j];
        arr[j]=temp1;
        arr[i]=temp2;
      }
    }
  }
  return arr;
}
function calculateCount(arr, num)
{
    let count = 0;
    for(let i = 0; i < arr.length; i++)
    {
      if(arr[i] == num)
      {
          count++;
      }
    }
  return count;
}
function addFrequency()
{
  frequencyOutput.innerHTML="";
  if(numDice==1)
  {
    for(let i=numDice;i<=6*numDice;i++)
    {
      frequencyOutput.innerHTML+="<b>"+i+"</b>"+": "+calculateCount(rollArraySum,i)+" Rolls<br />";
    }
  }
  else if(numDice==2)
  {
    for(let i=numDice;i<=6*numDice;i++)
    {
      frequencyOutput.innerHTML+="<b>"+i+"</b>"+": "+calculateCount(rollArraySum,i)+" Rolls<br />";
    }
  }
  else
  {
    for(let i=numDice;i<=6*numDice;i++)
    {
      frequencyOutput.innerHTML+="<b>"+i+"</b>"+": "+calculateCount(rollArraySum,i)+" Rolls<br />";
    }
  }
  
}
function addMean()
{
  var sum = 0;
  for(let i=0;i<rollArray.length;i++)
  {
    sum+=rollArray[i];
  }
  meanOutput.innerHTML = Math.round(sum/numRolls*100)/100;
}
function addMedian()
{
  var tempArray=sortArray(rollArray);
  medianOutput.innerHTML = tempArray[Math.round(tempArray.length/2)];
}
function addMode()
{
  var bestStreak = 1;
  var bestElem = rollArray[0];
  var currentStreak = 1;
  var currentElem = rollArray[0];

  for (let i = 0; i < rollArray.length-1; i++) 
  {
    currentElem = rollArray[i];
    if (rollArray[i] != rollArray[i+1]) 
    {
      if (currentStreak >= bestStreak) 
      {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
    }
    else
    {
      currentStreak++;
    }
  }
  modeOutput.innerHTML=bestElem;
}
function addDouble()
{
  var count=0;
  if(numDice==2)
  {
    for(let i=0;i<rollArray.length-1;i+=2)
    {
      if(rollArray[i]==rollArray[i+1])
      {
        count++;
      }
    }
    doubleOutput.innerHTML=count;
  }
  if(numDice==3)
  {
    for(let i=0;i<rollArray.length-2;i+=3)
    {
      if(rollArray[i]==rollArray[i+1] || rollArray[i+1]==rollArray[i+2] || rollArray[i+2]==rollDice[i])
      {
        count++;
      }
    }
    doubleOutput.innerHTML=count;
  }
}
function addTriple()
{
  if(numDice==3)
  {
    count=0;
    for(let i=0;i<rollArray.length-2;i+=3)
    {
      if(rollArray[i]==rollArray[i+1] && rollArray[i+1]==rollArray[i+2])
      {
        count++;
      }
    }
    tripleOutput.innerHTML=count;
  }
}
