import AutoNumeric from 'autonumeric';
import { CSSProperties } from 'react';
interface Props {
    type?: 'text' | 'tel' | 'hidden';
    id?: string;
    className?: string;
    style?: CSSProperties | undefined;
    disabled?: boolean;
    name?: string;
    tabIndex?: number | undefined;
    unselectable?: 'on' | 'off';
    size?: number;
    autoFocus?: boolean;
    placeholder?: string | undefined;
    value?: string | number | undefined;
    onChange?: (e: any, v: number) => void | undefined;
    onFocus?: (() => void) | undefined;
    onBlur?: <D>(e: D) => void;
    onKeyPress?: (() => void) | undefined;
    onKeyUp?: (() => void) | undefined;
    onKeyDown?: (() => void) | undefined;
    allowDecimalPadding?: boolean;
    caretPositionOnFocus?: AutoNumeric.CaretPositionOption | undefined;
    createLocalList?: boolean;
    currencySymbol?: string;
    currencySymbolPlacement?: AutoNumeric.CurrencySymbolPlacementOption | undefined;
    decimalCharacter?: string;
    decimalCharacterAlternative?: '.' | ',' | null;
    decimalPlaces?: number;
    decimalPlacesRawValue?: number;
    decimalPlacesShownOnBlur?: number;
    decimalPlacesShownOnFocus?: number;
    defaultValueOverride?: string;
    digitalGroupSpacing?: string;
    digitGroupSeparator?: string;
    divisorWhenUnfocused?: number;
    emptyInputBehavior?: 'null' | 'focus' | 'press' | 'always' | 'zero';
    eventBubbles?: boolean | undefined;
    eventIsCancelable?: boolean;
    failOnUnknownOption?: boolean;
    formatOnPageLoad?: boolean;
    historySize?: number;
    isCancellable?: boolean;
    leadingZero?: 'allow' | 'deny' | 'keep';
    maximumValue?: string | undefined;
    minimumValue?: string | undefined;
    modifyValueOnWheel?: boolean;
    negativeBracketsTypeOnBlur?: string;
    negativePositiveSignPlacement?: 'l' | 'r' | 'p' | 's';
    negativeSignCharacter?: string;
    noEventListeners?: boolean;
    onInvalidPaste?: 'error' | 'ignore' | 'clamp' | 'truncate' | 'replace';
    outputFormat?: 'string' | 'number';
    overrideMinMaxLimits?: 'ceiling' | 'floor' | 'ignore';
    positiveSignCharacter?: string;
    rawValueDivisor?: number;
    readOnly?: boolean;
    roundingMethod?: AutoNumeric.RoundingMethodOption | undefined;
    saveValueToSessionStorage?: boolean;
    selectNumberOnly?: boolean;
    selectOnFocus?: boolean;
    serializeSpaces?: AutoNumeric.SerializeSpacesOption | undefined;
    showOnlyNumbersOnFocus?: boolean;
    showPositiveSign?: boolean;
    showWarnings?: boolean;
    styleRules?: object;
    suffixText?: string;
    symbolWhenUnfocused?: string;
    unformatOnHover?: boolean;
    unformatOnSubmit?: boolean;
    valuesToStrings?: object;
    wheelOn?: 'focus' | 'hover';
    wheelStep?: number | 'progressive' | undefined;
    preDefined?: object;
}
declare const InputAmount: (props: Props) => JSX.Element;
export default InputAmount;