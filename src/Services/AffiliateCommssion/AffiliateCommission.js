export const affiliateCommission = (affiliateShortURL, price) => {
    console.log('affiliateShortURL', affiliateShortURL);
    // SET COMMISSION
    const earned = ((2 / 100) * (price / 100)).toFixed(2)

    fetch(`https://guarded-ocean-73313.herokuapp.com/ref/`, {
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
