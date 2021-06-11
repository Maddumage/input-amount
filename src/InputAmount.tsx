import AutoNumeric from 'autonumeric';
import React, { CSSProperties, useEffect, useState } from 'react';

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
	currencySymbolPlacement?:
		| AutoNumeric.CurrencySymbolPlacementOption
		| undefined;
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

const InputAmount = (props: Props): JSX.Element => {
	let inputRef: HTMLInputElement;
	const [autoNumeric, setAutoNumeric] = useState<any>();
	const [inputProps, setInputProps] = useState<any>();
	const {
		type = 'text',
		outputFormat = 'number',
		preDefined = {},
		className = 'asds',
		...restProps
	} = props;

	useEffect(() => {
		let an = new AutoNumeric(inputRef, props.value, {
			...props.preDefined,
			...restProps,
			outputFormat,
			// allowDecimalPadding: props.allowDecimalPadding,
			// caretPositionOnFocus: props.caretPositionOnFocus,
			// createLocalList: props.createLocalList,
			// currencySymbol: props.currencySymbol,
			// currencySymbolPlacement: props.currencySymbolPlacement,
			// decimalCharacter: props.decimalCharacter,
			// decimalCharacterAlternative: props.decimalCharacterAlternative,
			// decimalPlaces: props.decimalPlaces ?? 2,
			// decimalPlacesRawValue: props.decimalPlacesRawValue,
			// decimalPlacesShownOnBlur: props.decimalPlacesShownOnBlur,
			// decimalPlacesShownOnFocus: props.decimalPlacesShownOnFocus,
			// defaultValueOverride: props.defaultValueOverride,
			// digitalGroupSpacing: props.digitalGroupSpacing,
			// digitGroupSeparator: props.digitGroupSeparator,
			// divisorWhenUnfocused: props.divisorWhenUnfocused,
			// emptyInputBehavior: props.emptyInputBehavior,
			// failOnUnknownOption: props.failOnUnknownOption,
			// formatOnPageLoad: props.formatOnPageLoad,
			// historySize: props.historySize,
			// isCancellable: props.isCancellable,
			// leadingZero: props.leadingZero,
			// maximumValue: props.maximumValue,
			// minimumValue: props.minimumValue,
			// modifyValueOnWheel: props.modifyValueOnWheel,
			// negativeBracketsTypeOnBlur: props.negativeBracketsTypeOnBlur,
			// negativePositiveSignPlacement: props.negativePositiveSignPlacement,
			// noEventListeners: props.noEventListeners,
			// onInvalidPaste: props.onInvalidPaste,
			// outputFormat: props.outputFormat,
			// overrideMinMaxLimits: props.overrideMinMaxLimits,
			// rawValueDivisor: props.rawValueDivisor,
			// readOnly: props.readOnly,
			// roundingMethod: props.roundingMethod,
			// saveValueToSessionStorage: props.saveValueToSessionStorage,
			// selectNumberOnly: props.selectNumberOnly,
			// selectOnFocus: props.selectOnFocus,
			// serializeSpaces: props.serializeSpaces,
			// showOnlyNumbersOnFocus: props.showOnlyNumbersOnFocus,
			// showPositiveSign: props.showPositiveSign,
			// showWarnings: props.showWarnings,
			// styleRules: props.styleRules,
			// suffixText: props.suffixText,
			// symbolWhenUnfocused: props.symbolWhenUnfocused,
			// unformatOnHover: props.unformatOnHover,
			// unformatOnSubmit: props.unformatOnSubmit,
			// wheelStep: props.wheelStep,
		});
		setAutoNumeric(an);
		let obj = {};
		[
			'id',
			'className',
			'style',
			'disabled',
			'type',
			'name',
			'tabIndex',
			'unselectable',
			'size',
			'autoFocus',
			'placeholder',
		].forEach((prop) => (obj[prop] = props[prop]));
		setInputProps(obj);
	}, []);

	const getValue = () => {
		if (!autoNumeric) return;
		const valueMapper = {
			string: (numeric: { getNumericString: () => any }) =>
				numeric.getNumericString(),
			number: (numeric: { getNumber: () => any }) => numeric.getNumber(),
		};
		return valueMapper[props.outputFormat ?? 'number'](autoNumeric);
	};

	const callEventHandler = (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.KeyboardEvent<HTMLInputElement>,
		eventName: string
	) => {
		if (!props[eventName]) return;
		props[eventName](event, getValue());
	};

	return (
		<input
			ref={(node) => {
				if (node) {
					inputRef = node;
				}
			}}
			onChange={(e) => callEventHandler(e, 'onChange')}
			onFocus={(e) => callEventHandler(e, 'onFocus')}
			onBlur={(e) => callEventHandler(e, 'onBlur')}
			onKeyPress={(e) => callEventHandler(e, 'onKeyPress')}
			onKeyUp={(e) => callEventHandler(e, 'onKeyUp')}
			onKeyDown={(e) => callEventHandler(e, 'onKeyDown')}
			{...inputProps}
		/>
	);
};

export default InputAmount;
