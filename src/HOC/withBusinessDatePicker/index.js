import React from 'react';
import s from '../../components/ExchangeRates/RatesDatePicker/RatesDatePicker.module.scss';

export const withBusinessDatePicker = Component => {
  return class RatesDatePicker extends React.Component {
    handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
      this.props.onSpotDateChange(selectedDay);
    };

    render() {
      const { spotDate } = this.props;
      return (
        <div className={s.DayPickerContainer}>
          <p>{spotDate && `Rate as of ${spotDate.toLocaleDateString()}`}</p>
          <Component
            value={spotDate}
            onDayChange={this.handleDayChange}
            dayPickerProps={{
              selectedDays: spotDate,
              disabledDays: { daysOfWeek: [0, 6] },
            }}
            {...this.props}
          />
        </div>
      );
    }
  };
};
