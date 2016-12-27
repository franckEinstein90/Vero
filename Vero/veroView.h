
// veroView.h : interface of the CveroView class
//

#pragma once
#include "veroDoc.h"

class CveroView : public CView
{
protected: // create from serialization only
	CveroView();
	DECLARE_DYNCREATE(CveroView)

// Attributes
public:
	CveroDoc* GetDocument() const;

// Operations
public:

// Overrides
public:
	virtual void OnDraw(CDC* pDC);  // overridden to draw this view
	virtual BOOL PreCreateWindow(CREATESTRUCT& cs);
protected:
	virtual BOOL OnPreparePrinting(CPrintInfo* pInfo);
	virtual void OnBeginPrinting(CDC* pDC, CPrintInfo* pInfo);
	virtual void OnEndPrinting(CDC* pDC, CPrintInfo* pInfo);

// Implementation
public:
	virtual ~CveroView();
#ifdef _DEBUG
	virtual void AssertValid() const;
	virtual void Dump(CDumpContext& dc) const;
#endif

protected:

// Generated message map functions
protected:
	DECLARE_MESSAGE_MAP()
};

#ifndef _DEBUG  // debug version in veroView.cpp
inline CveroDoc* CveroView::GetDocument() const
   { return reinterpret_cast<CveroDoc*>(m_pDocument); }
#endif

