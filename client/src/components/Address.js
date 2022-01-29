export const UserAddress = ({account}) => {

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(account)
    }
    return(
        <>
            <abbr onClick={copyToClipboard} title={account}> <span>{account.substring(0, 5)}...{account.substring(account.length - 4)}</span></abbr>
        </>
    )}
