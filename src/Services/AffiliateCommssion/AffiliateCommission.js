export const affiliateCommission = (affiliateShortURL, price) => {
    console.log('affiliateShortURL', affiliateShortURL);
    // SET COMMISSION
    const earned = ((2 / 100) * (price / 100)).toFixed(2)

    fetch(`https://young-springs-82149.herokuapp.com/ref/`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ ref: affiliateShortURL, earned: earned })
    })
        .then(res => res.json())
        .then(data => {

        })
}
