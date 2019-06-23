import React, { Component } from "react";

export const logProps = (WrappedComponent) => {
    class EnhancedComponent extends Component {
        componentDidUpdate(prevProps) {
            console.log('prev props:', prevProps);
            console.log('next props:', this.props);
        }

        render() {
            const { forwardedRef, ...restProps } = this.props;

            return <WrappedComponent ref={forwardedRef} {...restProps} />
        }
    }

    return React.forwardRef((props, ref) => <EnhancedComponent forwardedRef={ref} {...props} />);
};
