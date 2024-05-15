import { Text, View, StyleSheet } from 'react-native'
import { Input, SecureInput, TextBelow } from './Input'
import { Button, ButtonProps } from './Button';
import { Link, LinkParam } from './Link';

/**
 * Type of input list props
 * 
 * @param inputList Array of objects which contain a `label` string, `placeholder` string, `React.useState` `value` and `setValue` and an `isSecured` boolean
 * 
 * if `isSecured` equals true, then it will generate a generic `SecureInput`, else it generates a generic `Input`
 * 
 * @example
 * const inputList = [
 *      {
 *          label: 'Username',
 *          placeholder: 'Tell me your username',
 *          value: username,
 *          setValue: setUsername,
 *          isSecured: false
 *      },
 *      {
 *          label: 'Password',
 *          placeholder: 'Please input a password',
 *          value: password,
 *          setValue: setPassword,
 *          isSecured: true
 *      }
 * ]
 */
export type InputListProps = {
    inputList: {
        id: number;
        label: string;
        placeholder: string;
        value: any;
        setValue: any;
        isSecured: boolean;
        textBelow?: TextBelow;
    }[];
}


/**
 * Type of button list atributes
 * 
 * @param buttonList Array of objects which contain a `title` string and a `onPress` function
 * @example
 * const buttonList = [
 *      {
 *          title: 'Example title',
 *          onPress: doSomething
 *      },
 *      {
 *          title: 'Another example title',
 *          onPress: doSomethingElse
 *      }
 * ]
 */
export type ButtonListProps = {
    buttonList: ({
        buttonId: number;
    } & ButtonProps)[];
}


/**
 * @param inputList List of inputs that the user will be required to fill
 * @returns A list of `Input` or `SecureInput` components that use the `inputList` data
 */
export function InputList({ inputList, link }: InputListProps & LinkParam) {
    return (
        <View style={styles.inputList}>
            {
                inputList.map((item) => {
                    return !item.isSecured ? (
                        <Input
                            key={item.id}
                            label={item.label}
                            placeholder={item.placeholder}
                            value={item.value}
                            setValue={item.setValue}
                            textBelow={item.textBelow}
                        />
                    ) : (
                        <SecureInput
                            key={item.id}
                            label={item.label}
                            placeholder={item.placeholder}
                            value={item.value}
                            setValue={item.setValue}
                            textBelow={item.textBelow}
                        />
                    )
                })
            }
            {
                link ? (
                    <Link link={link} />
                ) : (<></>)
            }
        </View>
    )
}


/**
 * @param buttonList List of available buttons that the user may press
 * @returns A list of `Button` components that use the `buttonList` data
 */
export function ButtonList({ buttonList }: ButtonListProps) {
    return (
        <>
            {
                buttonList.map((item) => (
                    <Button
                        key={item.buttonId}
                        title={item.title}
                        onPress={item.onPress}
                        buttonStyle={{
                            background: item.buttonStyle?.background,
                            border: item.buttonStyle?.border,
                            textColor: item.buttonStyle?.textColor,
                        }}
                    />
                ))
            }
        </>
    )
}


/**
 * Generic form component
 * @param inputList List of inputs that the user will be required to fill
 * @param buttonList List of available buttons that the user may press
 * @returns The `Form` component
 */
export function Form({ children }: any) {
    return (
        <View style={styles.form}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
    },
    inputList: {
        gap: 20,
        marginBottom: 50,
    }
})