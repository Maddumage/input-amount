import React, { useRef } from 'react';

interface Props {
	type: 'text' | 'tel' | 'hidden';
	id?: string;
	className?: string;
	style?: object;
	disabled?: boolean;
	name?: string;
	tabIndex?: number;
	unselectable?: 'on' | 'off';
	size?: number;
	autoFocus?: boolean;
	placeholder?: string;
	value?: string | number;
	onChange?: () => void | undefined;
	onFocus?: () => void;
	onBlur?: () => void;
	onKeyPress?: () => void;
	onKeyUp?: () => void;
	onKeyDown?: () => void;
	allowDecimalPadding?: boolean;
	caretPositionOnFocus?: number;
	createLocalList?: boolean;
	currencySymbol?: string;
	currencySymbolPlacement?: string;
	decimalCharacter?: string;
	decimalCharacterAlternative?: string;
	decimalPlaces?: number;
	decimalPlacesRawValue?: number;
	decimalPlacesShownOnBlur?: number;
	decimalPlacesShownOnFocus?: number;
	defaultValueOverride?: string;
	digitalGroupSpacing?: string;
	digitGroupSeparator?: string;
	divisorWhenUnfocused?: number;
	emptyInputBehavior?: 'null' | 'focus' | 'press' | 'always' | 'zero';
	eventBubbles?: boolean;
	eventIsCancelable?: boolean;
	failOnUnknownOption?: boolean;
	formatOnPageLoad?: boolean;
	historySize?: number;
	isCancellable?: boolean;
	leadingZero?: 'allow' | 'deny' | 'keep';
	maximumValue?: string;
	minimumValue?: string;
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
	roundingMethod?: string;
	saveValueToSessionStorage?: boolean;
	selectNumberOnly?: boolean;
	selectOnFocus?: boolean;
	serializeSpaces?: string;
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
	wheelStep?: 'string' | 'number';
	preDefined?: object;
}

const InputAmount = (props: Props): JSX.Element => {
	const inputRef = useRef<HTMLInputElement>(null);
	const defaultProps: Props = {
		type: 'text',
		outputFormat: 'number',
		preDefined: {},
		className: 'asdf',
	};

	const callEventHandler = (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.KeyboardEvent<HTMLInputElement>,
		eventName: string
	) => {
		if (!props[eventName]) return;
		props[eventName](event, 0);
	};

	return (
		<input
			{...defaultProps}
			{...props}
			ref={inputRef}
			onChange={(e) => callEventHandler(e, 'onChange')}
			onFocus={(e) => callEventHandler(e, 'onFocus')}
			onBlur={(e) => callEventHandler(e, 'onBlur')}
			onKeyPress={(e) => callEventHandler(e, 'onKeyPress')}
			onKeyUp={(e) => callEventHandler(e, 'onKeyUp')}
			onKeyDown={(e) => callEventHandler(e, 'onKeyDown')}
		/>
	);
};

export default InputAmount;
