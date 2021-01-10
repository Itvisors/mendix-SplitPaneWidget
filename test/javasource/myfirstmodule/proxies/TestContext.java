// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

public class TestContext
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject testContextMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "MyFirstModule.TestContext";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		SplitPaneSizeVertical("SplitPaneSizeVertical"),
		SplitPaneSizeHorizontal("SplitPaneSizeHorizontal");

		private java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public TestContext(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "MyFirstModule.TestContext"));
	}

	protected TestContext(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject testContextMendixObject)
	{
		if (testContextMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("MyFirstModule.TestContext", testContextMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a MyFirstModule.TestContext");

		this.testContextMendixObject = testContextMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'TestContext.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static myfirstmodule.proxies.TestContext initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return myfirstmodule.proxies.TestContext.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static myfirstmodule.proxies.TestContext initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new myfirstmodule.proxies.TestContext(context, mendixObject);
	}

	public static myfirstmodule.proxies.TestContext load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return myfirstmodule.proxies.TestContext.initialize(context, mendixObject);
	}

	public static java.util.List<myfirstmodule.proxies.TestContext> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<myfirstmodule.proxies.TestContext> result = new java.util.ArrayList<myfirstmodule.proxies.TestContext>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//MyFirstModule.TestContext" + xpathConstraint))
			result.add(myfirstmodule.proxies.TestContext.initialize(context, obj));
		return result;
	}

	/**
	 * Commit the changes made on this proxy object.
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of SplitPaneSizeVertical
	 */
	public final java.lang.Integer getSplitPaneSizeVertical()
	{
		return getSplitPaneSizeVertical(getContext());
	}

	/**
	 * @param context
	 * @return value of SplitPaneSizeVertical
	 */
	public final java.lang.Integer getSplitPaneSizeVertical(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.SplitPaneSizeVertical.toString());
	}

	/**
	 * Set value of SplitPaneSizeVertical
	 * @param splitpanesizevertical
	 */
	public final void setSplitPaneSizeVertical(java.lang.Integer splitpanesizevertical)
	{
		setSplitPaneSizeVertical(getContext(), splitpanesizevertical);
	}

	/**
	 * Set value of SplitPaneSizeVertical
	 * @param context
	 * @param splitpanesizevertical
	 */
	public final void setSplitPaneSizeVertical(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer splitpanesizevertical)
	{
		getMendixObject().setValue(context, MemberNames.SplitPaneSizeVertical.toString(), splitpanesizevertical);
	}

	/**
	 * @return value of SplitPaneSizeHorizontal
	 */
	public final java.lang.Integer getSplitPaneSizeHorizontal()
	{
		return getSplitPaneSizeHorizontal(getContext());
	}

	/**
	 * @param context
	 * @return value of SplitPaneSizeHorizontal
	 */
	public final java.lang.Integer getSplitPaneSizeHorizontal(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.Integer) getMendixObject().getValue(context, MemberNames.SplitPaneSizeHorizontal.toString());
	}

	/**
	 * Set value of SplitPaneSizeHorizontal
	 * @param splitpanesizehorizontal
	 */
	public final void setSplitPaneSizeHorizontal(java.lang.Integer splitpanesizehorizontal)
	{
		setSplitPaneSizeHorizontal(getContext(), splitpanesizehorizontal);
	}

	/**
	 * Set value of SplitPaneSizeHorizontal
	 * @param context
	 * @param splitpanesizehorizontal
	 */
	public final void setSplitPaneSizeHorizontal(com.mendix.systemwideinterfaces.core.IContext context, java.lang.Integer splitpanesizehorizontal)
	{
		getMendixObject().setValue(context, MemberNames.SplitPaneSizeHorizontal.toString(), splitpanesizehorizontal);
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return testContextMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final myfirstmodule.proxies.TestContext that = (myfirstmodule.proxies.TestContext) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return "MyFirstModule.TestContext";
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}